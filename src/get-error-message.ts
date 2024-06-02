/**
 * use in try/catch statements to retrieve an error message regardless of error type
 * credit: https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript
 */

export function getErrorMessage(error: unknown) {
    if (error instanceof Error) return error.message;
    return String(error);
}