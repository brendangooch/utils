/**
 * 
 */

export function listen(name: string, handler: Function, target: HTMLElement = document.body): void {
    target.addEventListener(name, handler as EventListener);
}