import type { FC, SVGProps } from "react";

export type SidebarItemsType = {
    path: string;
    text: string;
    Icon: FC<SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
};