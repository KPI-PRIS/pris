import {Button, Navbar, NavbarBrand, NavbarContent} from "@nextui-org/react";
import {Link} from "react-router-dom";
import Logo from "../svgs/Logo.tsx";
import {useDispatch, useSelector} from "react-redux";
import {StoreState} from "../store/store.ts";
import {clearUser, User} from "../store/slices/userSlice.ts";

export default function Header() {
    const user: User | null = useSelector((state: StoreState) => state.user);
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(clearUser())
    }

    return (
        <Navbar>
            <NavbarBrand as={Link} to='/'>
                <Logo/>
                <p className="font-bold text-inherit">PRIS</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <Link to="/matches">
                    Матчи
                </Link>
                <Link to="/">
                    Новини
                </Link>
                <Link to="#">
                    Щось іще треба придумати)
                </Link>
            </NavbarContent>
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
        </Navbar>
    )
}