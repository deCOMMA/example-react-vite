/// <reference types="vite/client" />
/// <reference types="vitest/config" />
/// <reference types="vitest" />
// добавил так как не ставил в приоритет node:test а не vitest при import
declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export default classes;
}
