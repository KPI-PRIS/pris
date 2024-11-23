import {ReactNode} from "react";
import {Card} from "@nextui-org/react";

interface BoxProps {
    children: ReactNode;
    classCard?: string;
}

export default function CenterBox({children, classCard}: BoxProps) {
    return (
        <div className="w-full flex justify-center">
            <Card className={classCard ?? "w-1/2"}>
                {children}
            </Card>
        </div>
    )
}