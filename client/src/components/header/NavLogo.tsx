import {Link} from "react-router-dom";
import Logo from "../../svgs/Logo.tsx";
import {NavbarBrand} from "@nextui-org/react";

export default function NavLogo() {
    return (
        <NavbarBrand as={Link} to='/'>
            <Logo/>
            <p className="font-bold text-inherit">PRIS</p>
        </NavbarBrand>
    )
}