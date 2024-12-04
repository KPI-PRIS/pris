import {Link} from "react-router-dom";
import {NavbarContent} from "@nextui-org/react";

export default function ContentHeader() {
    return (
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <Link to="/">
                Новини
            </Link>
            <Link to="/matches">
                Матчи
            </Link>
            <Link to="/merchandise">
                Товари
            </Link>
        </NavbarContent>
    )
}