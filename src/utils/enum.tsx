interface PaymentType {
  [type: string]: string;
}

export const PAYMENT_METHOD: PaymentType = {
  CREDIT: 'Crédito',
  DEBIT: 'Débito',
  ONLINE: 'Online',
};
