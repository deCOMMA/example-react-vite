import { getAuthUserData } from "@/entities/User";
import { RoutePath } from "@/shared/config/routerConfig/routeConfig";
import type { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export function ReqireAyth({ children }: { children: ReactNode }) {
    const auth = useSelector(getAuthUserData)
    const location = useLocation()

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }}></Navigate>
    }
    return children;
}