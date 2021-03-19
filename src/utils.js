/**
 * @param dateString date string in `YYYY-MM` format
 *
 * Example:
 * `2020-01` ➡️ `Jan 2020`
 */
export function format(dateString) {
  const [year, month] = dateString.split('-');
  const date = new Date(year, month - 1);

  return `${date.toString().slice(4, 7)} ${year}`;
}
