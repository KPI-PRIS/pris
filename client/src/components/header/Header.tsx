import {Navbar} from "@nextui-org/react";
import ActionsHeader from "./ActionsHeader.tsx";
import NavLogo from "./NavLogo.tsx";
import ContentHeader from "./ContentHeader.tsx";

export default function Header() {
    return (
        <Navbar>
            <NavLogo/>
            <ContentHeader/>
            <ActionsHeader/>
        </Navbar>
    )
}