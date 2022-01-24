
/**
 * Sums the values of an array of numbers.
 *
 * @param {Array<T>} arr The array of numbers to sum.
 * @param {T} prop The property to sum.
 * @return {number} The sum of the values in the array.
 */
export function sumProperty<T>(arr: T[], prop: keyof T): number {
  return arr.reduce((acc, curr) => {
    return acc + Number(curr[prop]);
  }, 0);
}
