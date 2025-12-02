import { prisma } from "../../client";
import { PaymentGateways } from "../../generated/prisma";

async function main() {
  const gateways: Omit<PaymentGateways, "id">[] = [
    {
      enName: "passargad",
      faName: "پاسارگاد",
      enabled: true,
    },
    {
      enName: "tejarat",
      faName: "تجارت",
      enabled: false,
    },
  ];

  try {
    const addGatewaysToDb = await prisma.paymentGateways.createMany({
      data: [...gateways],
    });
  } catch (error) {
    console.log(error);
  }
}

main();
