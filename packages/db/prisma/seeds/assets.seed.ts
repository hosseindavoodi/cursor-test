import { prisma } from "../../client";
import { Prisma } from "../../generated/prisma";

async function main() {
  const assetTypes: Prisma.AssetTypeCreateInput[] = [
    {
      type: "PASSPORT_IMAGE",
      desc: "تصویر پاسپورت",
      deleteable: false,
    },
    {
      type: "NATIONAL_CARD_IMAGE",
      desc: "تصویر کارت ملی",
      deleteable: false,
    },
    {
      type: "FLAG",
      desc: "پرچم کشور",
      deleteable: false,
    },
    {
      type: "COMITMENT_FORM",
      desc: "فرم تعهد",
      deleteable: false,
    },
    {
      type: "PERSONAL_3X4_IMAGE",
      desc: "عکس 3x4",
      deleteable: false,
    },
    {
      type: "THUMBNAIL",
      desc: "تصویر پیش نمایش",
      deleteable: false,
    },
    {
      type: "HEADER",
      desc: "تصویر هدر نمایش شده در سایت",
      deleteable: false,
    },
  ];

  try {
    const upserted = await Promise.all(
      assetTypes.map(async (type) => {
        return prisma.assetType.upsert({
          create: { type: type.type, desc: type.desc },
          update: { type: type.type, desc: type.desc },
          where: {
            type: type.type,
          },
        });
      })
    );
  } catch (error) {
    console.log(error);
  }
}

main();
