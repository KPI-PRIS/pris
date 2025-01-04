import {Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownSection, DropdownTrigger} from "@nextui-org/react";
import {clearUser, User} from "../../../store/slices/userSlice.ts";
import {useDispatch} from "react-redux";
import {Action, classDropDown, getListActionsByRole, itemClasses} from "./utils.ts";
import {useNavigate} from "react-router";
import {sendSuccessfulNotify} from "../../../utils/NotifyUtils.ts";
import {getTranslateRole} from "../../../utils/utils.ts";
import {AvatarCustom} from "../../AvatarCustom.tsx";


export default function CustomActions({user}: { user: User }) {
    const nav = useNavigate()
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(clearUser())
        nav('/')
        sendSuccessfulNotify('Ви успішно вийшли')
    }

    console.log(user.role)

    return (
        <Dropdown showArrow classNames={classDropDown} radius="sm">
            <DropdownTrigger>
                <Avatar isBordered as="button" className="transition-transform"
                        src={user.image_url}/>
            </DropdownTrigger>
            <DropdownMenu
                aria-label="Custom item styles"
                className="p-3"
                disabledKeys={["profile"]}
                itemClasses={itemClasses}
            >
                <DropdownSection showDivider aria-label="Profile & Actions">
                    <DropdownItem key="profile" isReadOnly className="h-14 gap-2 opacity-100">
                        <AvatarCustom src={user.image_url}>
                            <div className="flex flex-col justify-center">
                                <p className="font-medium">{user.name}</p>
                                <p className="text-xs opacity-50">{`роль: ${getTranslateRole(user.role.toLowerCase())}`}</p>
                            </div>
                        </AvatarCustom>
                    </DropdownItem>
                    <DropdownItem key="own-profile" onPress={() => nav('/auth/profile')}>
                        Особистий профіль
                    </DropdownItem>
                    <DropdownItem key="orders" onPress={() => nav('/auth/orders')}>
                        Мої замовлення
                    </DropdownItem>
                    <DropdownItem key="new_statement" className={user.role === 'ADMIN' ? 'hidden' : ''}>
                        Подати заяву
                    </DropdownItem>
                </DropdownSection>
                <DropdownSection showDivider aria-label="Preferences" hidden={"FAN" === user.role}>
                    {getListActionsByRole(user.role).map((action: Action) =>
                        <DropdownItem key={action.text} onPress={() => nav(action.path)} isDisabled={action.isDisable}>
                            {action.text} {action.isDisable && <sup>Скоро</sup>}
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