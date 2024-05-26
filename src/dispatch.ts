/**
 * 
 */

export function dispatch<T>(name: string, data: T, target: HTMLElement = document.body): void {
    target.dispatchEvent(new CustomEvent(name, { detail: data }));
}