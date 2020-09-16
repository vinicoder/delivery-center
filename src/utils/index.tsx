export function formatToCurrency(value: number | string): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(Number(value));
}

export interface Payment {
  amount: number | string;
}

interface DebitAmount {
  amount: number;
  payments: Payment[];
}

export function getDebitAmount({ amount, payments }: DebitAmount): number {
  const amountPayment = payments
    .map(payment => Number(payment.amount))
    .reduce((a, b) => a + b);

  return amount - amountPayment;
}

export function getParents(child: HTMLElement): string[] {
  const parents: HTMLElement[] = [];
  const classesAndIds: string[] = [];

  const getElements = (childElem: HTMLElement) => {
    parents.push(childElem);
    if (childElem.parentElement) getElements(childElem.parentElement);
  };
  getElements(child);

  parents.forEach((parent: HTMLElement) => {
    if (parent.classList) {
      parent.classList.forEach(className =>
        classesAndIds.push(`.${className}`),
      );
    }
    if (parent.id) {
      classesAndIds.push(`#${parent.id}`);
    }
  });

  return classesAndIds as [];
}

export function isChildOf(element: HTMLElement, classOrId: string): boolean {
  const parents = getParents(element);

  if (parents.length <= 0) return false;

  return parents.includes(classOrId);
}

export function getSearchParam(name: string): string {
  const { search } = window.location;
  const urlSearchParams = new URLSearchParams(search);
  const searchQuery = urlSearchParams.get(name);
  return searchQuery || '';
}
