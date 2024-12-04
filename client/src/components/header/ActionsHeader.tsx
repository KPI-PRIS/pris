import {Button, NavbarContent} from "@nextui-org/react";
import {Link} from "react-router-dom";
import {clearUser, User} from "../../store/slices/userSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import {StoreState} from "../../store/store.ts";

export default function ActionsHeader() {
    const user: User | null = useSelector((state: StoreState) => state.user);
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(clearUser())
    }

    return (
        <>
            {!user &&
                <NavbarContent justify="end">
                    <Link to="/login">Вхід</Link>
                    <Button as={Link} color="primary" to="/registration" variant="flat">
                        Реєстрація
                    </Button>
                </NavbarContent>
            }
            {
                user &&
                <NavbarContent justify="end">
                    <Button as={Link} color="danger" onClick={handleLogout} variant="flat">
                        Вийти
                    </Button>
                </NavbarContent>
            }
        </>
    )
}