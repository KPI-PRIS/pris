import {CustomUser} from "../../store/slices/userSlice.ts";
import {AvatarCustom} from "../AvatarCustom.tsx";

export default function SelectUser({user}: { user: CustomUser | null }) {
    if (!user) {
        return <p>вантаження...</p>
    }

    return (
        <div key={user.id} className="flex items-center gap-2">
            <AvatarCustom src={user.image_url}/>
            {/*<Avatar*/}
            {/*    alt={user.name}*/}
            {/*    className="flex-shrink-0"*/}
            {/*    size="sm"*/}
            {/*    src={user.image_url}*/}
            {/*/>*/}
            <div className="flex flex-col">
                <span>{user.name}</span>
            </div>
        </div>
    )
}