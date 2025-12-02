import { createPortal } from 'react-dom';
import '@/app/styles/index.css';

type PortalProps = {
    children: React.ReactNode;
    container?: HTMLElement;
};

export const Portal = ({ children, container = document.body }: PortalProps) => {
    return createPortal(children, container);
};
