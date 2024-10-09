enum Time {
  minutes = 1000 * 60,
  hours = Time.minutes * 60,
}

// NOTE: Даты выбираются в мобильном приложении
// Доверяем, что временной промежуток не больше одного дня
const getDifferenceBetweenDate = (firstDate?: string, secondDate?: string) => {
  if (!firstDate || !secondDate) return '';

  const startDate = new Date(firstDate);
  const endDate = new Date(secondDate);

  const difference = endDate.getTime() - startDate.getTime();

  const minutes = difference / Time.minutes;
  if (minutes < 60) {
    return `${Math.trunc(minutes)} мин.`;
  }

  const hours = difference / Time.hours;
  const start = Math.trunc(hours);
  const end = Math.trunc(minutes - start * 60);

  return end ? `${start} ч. ${end} мин.` : `${start} ч.`;
};

export default getDifferenceBetweenDate;
