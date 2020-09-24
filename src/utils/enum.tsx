interface PaymentType {
  [type: string]: string;
}

const PAYMENT_METHOD: PaymentType = {
  CREDIT: 'Crédito',
  DEBIT: 'Débito',
  ONLINE: 'Online',
};

export default {
  PAYMENT_METHOD,
};
