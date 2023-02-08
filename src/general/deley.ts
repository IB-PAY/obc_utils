/**
 * Make delay
 *
 * @param {number} ms - Milliseconds
 */
export function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
