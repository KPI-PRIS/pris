import {Button, NavbarContent} from "@nextui-org/react";
import {Link} from "react-router-dom";
import {User} from "../../store/slices/userSlice.ts";
import {useSelector} from "react-redux";
import {StoreState} from "../../store/store.ts";
import CustomActions from "./actions/CustomActions.tsx";
import BucketAction from "./BucketAction.tsx";

export default function ActionsHeader() {
    const user: User | null = useSelector((state: StoreState) => state.user);

    return (
        <NavbarContent justify="end">
            <BucketAction/>
            {!user && <>
                <Link to="/login">Вхід</Link>
                <Button as={Link} color="primary" to="/registration" variant="flat">
                    Реєстрація
                </Button>
            </>
            }
            {user && <>
                <CustomActions user={user}/>
            </>}

        </NavbarContent>
    )
}