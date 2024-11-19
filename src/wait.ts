/**
 * a Promise delayed by an arbitrary length of time
 */

export function wait(ms: number): Promise<void> {
    return new Promise((res) => setTimeout(res, ms));
}