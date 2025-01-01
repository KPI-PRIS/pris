import {Spinner} from "@nextui-org/react";

interface LoadingSpinnerProps {
    text?: string,
    isVisible: boolean
}

export default function LoadingSpinner({text = "сторінку", isVisible}: LoadingSpinnerProps) {
    return (isVisible &&
        <Spinner className="flex justify-center bg-white p-10" label={`Вантажемо ${text} , почекайте будь ласка ...`}/>)
}