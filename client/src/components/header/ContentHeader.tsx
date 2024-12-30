import {Link} from "react-router-dom";
import {NavbarContent} from "@nextui-org/react";

export default function ContentHeader() {
    return (
        <NavbarContent className="hidden sm:flex gap-4 space-x-10 text-lg" justify="center">
            <Link className='link' to="/">
                Новини
            </Link>
            <Link to="/matches">
                Матчи
            </Link>
            <Link to="/merches">
                Фан-шоп
            </Link>

        </NavbarContent>
    )
}