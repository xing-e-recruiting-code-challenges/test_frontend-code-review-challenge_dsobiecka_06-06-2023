function formatDate(date: string) {
  if (!date) return '';

  const dateToFormat = new Date(date);

  return new Intl.DateTimeFormat('en-GB', {
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(dateToFormat);
}

export default formatDate;
