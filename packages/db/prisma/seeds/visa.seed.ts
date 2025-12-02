// prisma/seed-visa.ts
/* eslint-disable no-console */
import {
    PrismaClient,
    Prisma,
    VisaTypes,
    ProductTypes,
    OrderStatus,
} from "../../generated/prisma/client";

const prisma = new PrismaClient();

const D = (v: string | number) => new Prisma.Decimal(v);

async function ensureCustomerUser() {
    const email = "user@example.com";
    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) return existing;

    return prisma.user.create({
        data: {
            email,
            isActive: true,
        },
    });
}

async function ensureVisaCountry_AM() {
    let country = await prisma.visaCountry.findFirst({
        where: { countryCode: "AM" },
    });

    if (!country) {
        country = await prisma.visaCountry.create({
            data: {
                countryEnName: "Armenia",
                countryFaName: "ارمنستان",
                countryCode: "AM",
                processTime: "7 تا 15",
                isValidForDays: 90,
                immediatePayment: true,
                types: { set: [VisaTypes.SINGLE, VisaTypes.MULTI, VisaTypes.TOURIST] },
            },
        });
    }

    const ensureDuration = async (days: number) => {
        let d = await prisma.visaDuration.findFirst({
            where: { countryId: country!.id, durationInDays: days },
        });
        if (!d) {
            d = await prisma.visaDuration.create({
                data: {
                    durationInDays: days,
                    countryId: country!.id,
                },
            });
        }
        return d;
    };

    const dur30 = await ensureDuration(30);
    const dur60 = await ensureDuration(60);

    const ensureGroup = async (title: string, startAge: number, endAge: number) => {
        let g = await prisma.visaGroups.findFirst({
            where: { countryId: country!.id, title },
        });
        if (!g) {
            g = await prisma.visaGroups.create({
                data: {
                    title,
                    startAge,
                    endAge,
                    countryId: country!.id,
                },
            });
        }
        return g;
    };

    const grpAdult = await ensureGroup("Adult", 18, 60);
    const grpChild = await ensureGroup("Child", 6, 17);
    const grpInfant = await ensureGroup("Infant", 0, 5);

    const upsertPrice = async (
        groupId: string,
        type: VisaTypes,
        durationId: string,
        amount: Prisma.Decimal,
        unit = "IRR"
    ) => {
        return prisma.visaPrices.upsert({
            where: {
                visaGroupId_type_durationId: { visaGroupId: groupId, type, durationId },
            },
            update: { priceAmount: amount, priceUnit: unit },
            create: {
                visaGroupId: groupId,
                type,
                durationId,
                priceAmount: amount,
                priceUnit: unit,
            },
        });
    };

    const amPrices = {
        adult30Single: await upsertPrice(grpAdult.id, VisaTypes.SINGLE, dur30.id, D("5000000")),
        adult30Multi: await upsertPrice(grpAdult.id, VisaTypes.MULTI, dur30.id, D("9000000")),
        adult60Single: await upsertPrice(grpAdult.id, VisaTypes.SINGLE, dur60.id, D("7500000")),

        child30Single: await upsertPrice(grpChild.id, VisaTypes.SINGLE, dur30.id, D("3000000")),
        child60Single: await upsertPrice(grpChild.id, VisaTypes.SINGLE, dur60.id, D("4500000")),

        infant30Single: await upsertPrice(grpInfant.id, VisaTypes.SINGLE, dur30.id, D("1000000")),
        infant60Single: await upsertPrice(grpInfant.id, VisaTypes.SINGLE, dur60.id, D("1500000")),
    };

    return {
        country,
        durations: { dur30, dur60 },
        groups: { grpAdult, grpChild, grpInfant },
        prices: amPrices,
    };
}

function splitTotals(base: Prisma.Decimal, markupRate = 0.1, taxRate = 0.09) {
    const markup = base.mul(markupRate);
    const tax = base.mul(taxRate);
    const total = base.add(markup).add(tax);
    return { base, markup, tax, total };
}

async function main() {
    console.log("🌱 Seeding visa data (Armenia) + sample order...");

    const customer = await ensureCustomerUser();
    const {
        country: am,
        durations: { dur30 },
        groups: { grpAdult, grpChild },
        prices: { adult30Single, child30Single },
    } = await ensureVisaCountry_AM();

    const p1Base = adult30Single.priceAmount;
    const p2Base = child30Single.priceAmount;

    const p1Totals = splitTotals(p1Base);
    const p2Totals = splitTotals(p2Base);

    const orderTotals = {
        base: p1Totals.base.add(p2Totals.base),
        markup: p1Totals.markup.add(p2Totals.markup),
        tax: p1Totals.tax.add(p2Totals.tax),
    };
    const orderGrandTotal = orderTotals.base.add(orderTotals.markup).add(orderTotals.tax);

    const order = await prisma.orders.create({
        data: {
            customerId: customer.id,
            product: ProductTypes.VISA,
            totalBaseAmount: orderTotals.base,
            totalMarkupAmount: orderTotals.markup,
            totalTaxAmount: orderTotals.tax,
            totalPriceAmount: orderGrandTotal,
        },
    });

    const visaOrder = await prisma.visaOrder.create({
        data: {
            visaCountryId: am.id,
            visaType: VisaTypes.SINGLE,
            durationInDays: dur30.durationInDays,
            orderId: order.id,
            priceUnit: "IRR",

            totalBaseAmount: orderTotals.base,
            totalMarkupAmount: orderTotals.markup,
            totalTaxAmount: orderTotals.tax,
            totalPriceAmount: orderGrandTotal,

            status: OrderStatus.PAYMENT_SUCCESSFUL,
        },
    });

    const p1 = await prisma.visaPassengers.create({
        data: {
            firstName: "Ali",
            lastName: "Karimi",
            phone: "+98-912-0000001",
            email: "ali.karimi@example.com",
            birthdate: new Date("1990-01-01"),
            passportNumber: "A12345678",
            passportExpireDate: new Date("2030-12-31"),
            groupId: grpAdult.id,
            visaOrderId: visaOrder.id,

            totalBaseAmount: p1Totals.base,
            totalMarkupAmount: p1Totals.markup,
            totalTaxAmount: p1Totals.tax,
            totalPriceAmount: p1Totals.total,

            assets: {
                create: [{
                    id: "asset-ali-passport", // or use a unique id generator if needed
                    fileName: "ali-passport.jpg",
                    bucketName: "visa-assets",
                    objectKey: "ali-passport.jpg",
                    extension: "jpg"
                }],
            },
            price: {
                create: {
                    priceAmount: p1Totals.base,
                    priceUnit: "IRR",
                    appliedPriceId: adult30Single.id,
                    type: VisaTypes.SINGLE,
                    metadata: { note: "Seeded passenger price (adult, 30-day single entry)" },
                },
            },
        },
    });

    const p2 = await prisma.visaPassengers.create({
        data: {
            firstName: "Sara",
            lastName: "Karimi",
            phone: "+98-912-0000002",
            email: "sara.karimi@example.com",
            birthdate: new Date("2012-05-15"),
            passportNumber: "C98765432",
            passportExpireDate: new Date("2030-06-30"),
            groupId: grpChild.id,
            visaOrderId: visaOrder.id,

            totalBaseAmount: p2Totals.base,
            totalMarkupAmount: p2Totals.markup,
            totalTaxAmount: p2Totals.tax,
            totalPriceAmount: p2Totals.total,

            assets: {
                create: [{
                    id: "asset-sara-passport", // or use a unique id generator if needed
                    fileName: "sara-passport.jpg",
                    bucketName: "visa-assets",
                    objectKey: "sara-passport.jpg",
                    extension: "jpg"
                }],
            },
            price: {
                create: {
                    priceAmount: p2Totals.base,
                    priceUnit: "IRR",
                    appliedPriceId: child30Single.id,
                    type: VisaTypes.SINGLE,
                    metadata: { note: "Seeded passenger price (child, 30-day single entry)" },
                },
            },
        },
    });

    console.log("✅ Seed complete");
    console.log("— Visa Country:", am.countryEnName);
    console.log("— Durations:", dur30.durationInDays, "days");
    console.log("— Order ID:", order.id, "Total:", orderGrandTotal.toString(), "IRR");
    console.log("— VisaOrder ID:", visaOrder.id, "Status:", visaOrder.status);
    console.log("— Passengers:", p1.firstName, p1.lastName, "and", p2.firstName, p2.lastName);
}

main()
    .catch(async (e) => {
        console.error("❌ Error during seeding (visa):", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
