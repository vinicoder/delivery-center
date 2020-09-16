export interface Payment {
  amount: number | string;
}

interface DebitAmount {
  amount: number;
  payments: Payment[];
}

export default function getDebitAmount({
  amount,
  payments,
}: DebitAmount): number {
  const amountPayment = payments
    .map(payment => Number(payment.amount))
    .reduce((a, b) => a + b);

  return amount - amountPayment;
}
