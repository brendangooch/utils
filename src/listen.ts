/**
 * alternative to element.addEventListener(...)
 */

// passive: false allows touchstart event handler to call e.preventDefault()
export function listen(name: string, handler: Function, target: HTMLElement = document.body): void {
    target.addEventListener(name, handler as EventListener, { passive: false });
}