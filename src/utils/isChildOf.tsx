function getParents(child: HTMLElement): string[] {
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

export default function isChildOf(
  element: HTMLElement,
  classOrId: string,
): boolean {
  const parents = getParents(element);

  if (parents.length <= 0) return false;

  return parents.includes(classOrId);
}
