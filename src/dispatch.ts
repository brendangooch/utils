/**
 * dispatch custom events with or without custom detail object
 */

export function dispatchCustom<T>(name: string, data: T, target: HTMLElement = document.body): void {
    target.dispatchEvent(new CustomEvent(name, { detail: data }));
}

export function dispatch(name: string, target: HTMLElement = document.body): void {
    target.dispatchEvent(new CustomEvent(name, { detail: {} }));
}