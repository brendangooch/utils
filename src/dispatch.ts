/**
 * 
 */

export function dispatch<T>(name: string, data: T): void {
    document.body.dispatchEvent(new CustomEvent(name, { detail: data }));
}