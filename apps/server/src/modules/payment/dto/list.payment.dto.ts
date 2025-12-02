import { IsString } from "class-validator";

export class ListPaymentDto {
    paymentId: string;
    orderNumber!: string;
    orderType: string;
    totalAmount: Amount;
    createdAt: Date;
    status: string;

    legs: Leg[];
}


export class Amount {
    currency: string;
    amount: number;
}

export class Leg {
    status: string;
    createdAt: Date;
    amount: number;

    transactions: Transaction[]
}

export class Transaction {
    type: TransactionType
}

export class TransactionType {

}