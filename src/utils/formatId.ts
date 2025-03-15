export function formatId(id: number): string {
  return id.toString().padStart(8, '0');
}
