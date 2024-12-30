import {Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger, User} from "@nextui-org/react";
import {clearUser, CustomUser} from "../../../store/slices/userSlice.ts";
import {getTranslateRole} from "../../../utils/utils.ts";
import {useDispatch} from "react-redux";
import {Action, avatarProps, classDropDown, getListActionsByRole, itemClasses} from "./utils.ts";
import {useNavigate} from "react-router";


export default function CustomActions({user}: { user: CustomUser }) {
    const nav = useNavigate()
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(clearUser())
    }

    return (
        <Dropdown showArrow classNames={classDropDown} radius="sm">
            <DropdownTrigger>
                <Avatar isBordered as="button" className="transition-transform" src={avatarProps.src}/>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Custom item styles"
                className="p-3"
                disabledKeys={["profile"]}
                itemClasses={itemClasses}
            >
                <DropdownSection showDivider aria-label="Profile & Actions">
                    <DropdownItem key="profile" isReadOnly className="h-14 gap-2 opacity-100">
                        <User
                            avatarProps={avatarProps}
                            description={`роль: ${getTranslateRole(user.role.toLowerCase())}`}
                            name={user.name}
                        />
                    </DropdownItem>
                    <DropdownItem key="own-profile">Особистий профіль</DropdownItem>
                    <DropdownItem key="orders">Мої замовлення</DropdownItem>
                    <DropdownItem key="new_statement" hidden={user.role === "ADMIN"}>Подати заяву</DropdownItem>
                </DropdownSection>
                <DropdownSection showDivider aria-label="Preferences" hidden={"FAN" === user.role}>
                    {getListActionsByRole(user.role).map((action: Action) =>
                        <DropdownItem key={action.text} onPress={() => nav(action.path)}>
                            {action.text}
                        </DropdownItem>
                    )}
                </DropdownSection>
                <DropdownSection aria-label="Default actions">
                    <DropdownItem key="delete_actions" className="text-danger" color="danger" onPress={handleLogout}>
                        Вийти
                    </DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    );
}