import { useEffect, useRef, type RefObject } from 'react';

export interface UseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: RefObject<HTMLElement | null>;
    wrapperRef: RefObject<HTMLElement | Element | HTMLDivElement | null>;
}

export const useInfiniteScroll = (props: UseInfiniteScrollOptions) => {
    const { callback, triggerRef, wrapperRef } = props;

    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (callback) {
            const wrapperElement = wrapperRef.current;
            const triggerElement = triggerRef.current;

            if (!triggerElement) {
                console.log('error triggerElement');
                return;
            }

            const options: IntersectionObserverInit = {
                root: wrapperElement,
                rootMargin: '100px',
                threshold: 0.1,
            };

            observerRef.current = new IntersectionObserver(([entry]) => {
                if (entry && entry.isIntersecting) {
                    callback();
                }
            }, options);
            observerRef.current.observe(triggerElement);

            return () => {
                if (observerRef.current) {
                    observerRef.current.disconnect();
                    observerRef.current = null;
                }
            };
        }
    }, [triggerRef, wrapperRef, callback]);
};
