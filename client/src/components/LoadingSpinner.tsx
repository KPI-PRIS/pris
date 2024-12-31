import {Spinner} from "@nextui-org/react";

interface LoadingSpinnerProps {
    text: string,
    isVisible: boolean
}

export default function LoadingSpinner({text, isVisible}: LoadingSpinnerProps) {
    return (isVisible &&
        <Spinner className="flex justify-center bg-white" label={`Вантажемо ${text} , почекайте будь ласка ...`}/>)
}