/**
 * makes the first letter of a string uppercase
 */

export function UCFirst(text: string): string {
    return text.charAt(0).toUpperCase() + text.slice(1);
}