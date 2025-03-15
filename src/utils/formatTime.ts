export function formatTime(dateString: string): string {
  if (!dateString) {
    return '시간 없음';
  }

  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const period = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

  return `${formattedHours}:${minutes} ${period}`;
}
