export function propagatePaginationPages(currentPage: number, maxPage: number) {
  if (!currentPage || !maxPage) return [1];

  const items: (string | number)[] = [1];

  if (currentPage === 1 && maxPage === 1) return items;
  if (currentPage > 3) items.push('...');

  const radius = 1,
    leftPage = currentPage - radius,
    rightPage = currentPage + radius;

  for (
    let i = leftPage > 2 ? leftPage : 2;
    i <= Math.min(maxPage, rightPage);
    i++
  )
    items.push(i);

  if (rightPage + 1 < maxPage) items.push('...');
  if (rightPage < maxPage) items.push(maxPage);

  return items;
}
