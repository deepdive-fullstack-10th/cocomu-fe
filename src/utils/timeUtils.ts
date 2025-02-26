export function generateHours(maxHours: number = 24): string[] {
  return [...Array(maxHours)].map((_, i) => i.toString().padStart(2, '0'));
}

export function generateMinutes(interval: number = 1): string[] {
  return [...Array(60)].map((_, i) => i.toString().padStart(2, '0')).filter((m) => Number(m) % interval === 0);
}

export function generateTimer(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
