import {Link} from "react-router-dom";
import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    NavbarContent,
    NavbarItem
} from "@nextui-org/react";
import {useNavigate} from "react-router";
import {ChevronDown} from "../../svgs/ChevronDown.tsx";

export default function ContentHeader() {
    const nav = useNavigate();
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
            <Dropdown>
                <NavbarItem>
                    <DropdownTrigger>
                        <Button radius="sm"
                                disableRipple
                                className="text-lg"
                                variant="light"
                                endContent={<ChevronDown/>}
                        >
                            Команда
                        </Button>
                    </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu aria-label="Static Actions">
                    <DropdownItem key="coaches" onPress={() => nav('/coaches')}>Тренери</DropdownItem>
                    <DropdownItem key="players" onPress={() => nav('/players')}>Футболісти</DropdownItem>
                    <DropdownItem key="players" onPress={() => nav('/teams')}>Команди</DropdownItem>
                </DropdownMenu>
            </Dropdown>

        </NavbarContent>
    )
}