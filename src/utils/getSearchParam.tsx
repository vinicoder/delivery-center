export default function getSearchParam(name: string): string {
  const { search } = window.location;
  const urlSearchParams = new URLSearchParams(search);
  const searchQuery = urlSearchParams.get(name);
  return searchQuery || '';
}
