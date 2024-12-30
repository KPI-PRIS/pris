import {UserRoles, UserState} from "../store/slices/userSlice.ts";
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import {StoreState} from "../store/store.ts";
import AccessDenied from "./denied/AccessDenied.tsx";

interface Role {
    role?: UserRoles;
}

export default function AuthLayout({role = "FAN"}: Role) {
    const user: UserState = useSelector((state: StoreState) => state.user);

    if (!user || (user.role !== role && role !== 'FAN')) {
        return <AccessDenied/>
    }
    return (
        <>
            <Outlet/>
        </>
    )
}