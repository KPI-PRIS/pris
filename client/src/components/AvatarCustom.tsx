import {ReactNode} from "react";
import {Image} from "@nextui-org/react";

interface AvatarCustom {
    src: string;
    children?: ReactNode
}

export function AvatarCustom({children, src}: AvatarCustom) {
    return (
        <div className="flex flex-row space-x-5">
            <Image src={src} height={50} width={32} className="object-cover" radius="full"/>
            {children}
        </div>
    )
}