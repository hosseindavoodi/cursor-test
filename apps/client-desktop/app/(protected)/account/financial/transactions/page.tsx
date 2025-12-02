"use client";
import Paginator from "@sana/ui/components/paginator";
import Filters from "./_components/filters";
import Transactions from "./_components/transactions";
import moment from "moment-jalaali";
import { Download } from "lucide-react";

function TransactionsPage() {
  const transactions = [
    {
      transactionType: "BANK",
      orderType: "VISA",
      createdAt: new Date(),
      totalPriceAmount: 120000000,
      orderNumber: 2314,
    },
    {
      transactionType: "WALLET",
      orderType: "VISA",
      createdAt: new Date(),
      totalPriceAmount: 140000000,
      orderNumber: 11314,
    },
    {
      transactionType: "WALLET",
      orderType: "VISA",
      createdAt: new Date(),
      totalPriceAmount: 110500000,
      orderNumber: 20314,
    },
    {
      transactionType: "BANK",
      orderType: "VISA",
      createdAt: new Date(),
      totalPriceAmount: 95000000,
      orderNumber: 22314,
    },
    {
      transactionType: "BANK",
      orderType: "VISA",
      createdAt: new Date(),
      totalPriceAmount: 130000000,
      orderNumber: 22314,
    },
  ];

  return (
    <div className="w-full flex flex-col gap-y-[20px]">
      <Filters />
      <Transactions>
        <div className="w-full gap-y-2 items-center gap-y-4  grid grid-cols-6 justify-between text-center">
          <p className="text-[14px] text-gray-600">نوع سفارش</p>
          <p className="text-[14px] text-gray-600">تاریخ و ساعت تراکنش</p>
          <p className="text-[14px] text-gray-600">مبلغ تراکنش (تومان)</p>
          <p className="text-[14px] text-gray-600">نوع تراکنش</p>
          <p className="text-[14px] text-gray-600">شماره سفارش</p>
          <p className="text-[14px] text-gray-600">دانلود</p>

          {transactions.map((transaction) => (
            <div className="w-full text-[16px] font-medium border items-center rounded-[15px] h-[60px] col-span-6 grid grid-cols-6">
              <p>{transaction.orderType}</p>
              <p>{moment(transaction.createdAt).locale("fa").format("jYYYY/jMM/jDD - HH:mm")}</p>
              <p>{transaction.totalPriceAmount.toLocaleString()}</p>
              <p>{transaction.transactionType}</p>

              <p>{transaction.orderNumber}</p>
              <div className="text-primary-500 flex justify-center items-center">
                <Download size={20} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Paginator
            onPageClick={(page) => {
              console.log(page);
            }}
            page={2}
            perPage={2}
            totalPages={10}
          />
        </div>
      </Transactions>
    </div>
  );
}

export default TransactionsPage;
