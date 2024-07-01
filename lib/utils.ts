export function addCommas(n: string): string {
  return n.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
