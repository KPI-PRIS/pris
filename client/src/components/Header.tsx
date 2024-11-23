import {Button, Navbar, NavbarBrand, NavbarContent} from "@nextui-org/react";
import {Link} from "react-router-dom";
import Logo from "../svgs/Logo.tsx";

export default function Header() {
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
            <NavbarContent justify="end">
                <Link to="/login">Вхід</Link>
                <Button as={Link} color="primary" to="/registration" variant="flat">
                    Реєстрація
                </Button>
            </NavbarContent>
        </Navbar>
    )
}