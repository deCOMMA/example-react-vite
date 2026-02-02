import { lazy } from "react";
// import AddCommentForm from "./AddCommentForm";

export const AddCommentFormAsync = lazy(() => new Promise((resolve) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setTimeout(() => resolve(import('./AddCommentForm')), 1500)
}))