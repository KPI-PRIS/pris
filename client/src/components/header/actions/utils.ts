import {AvatarProps} from "@nextui-org/avatar";

export const avatarProps: Partial<AvatarProps> = {
    size: "sm",
    src: "https://avatars.githubusercontent.com/u/30373425?v=4",
}
export const itemClasses = {
    base: [
        "rounded-md",
        "text-black",
        "transition-opacity",
        "data-[hover=true]:text-foreground",
        "data-[hover=true]:bg-default-100",
        "dark:data-[hover=true]:bg-default-50",
        "data-[selectable=true]:focus:bg-default-50",
        "data-[pressed=true]:opacity-70",
        "data-[focus-visible=true]:ring-default-500",
    ],
}

export const classDropDown = {
    base: "before:bg-default-200",
    content: "p-0 border-small border-divider bg-background",
}

export interface Action {
    path: string;
    text: string;
}

export function getListActionsByRole(role: string): Action[] {
    switch (role.toLowerCase()) {
        case "admin":
            return [
                {
                    path: '/match/manage',
                    text: 'Матчи',
                },
                {
                    path: '/coach/manage',
                    text: 'Тренери',
                },
                {
                    path: '/news/manage',
                    text: 'Новини',
                },
                {
                    path: '/orders/manage',
                    text: 'Замовлення',
                },
                {
                    path: '/state/manage',
                    text: 'Заяви',
                },
            ]
        case "coach":
            return [
                {
                    path: '/team/plan/create',
                    text: 'Створити план команди',
                },
                {
                    path: '/player/plan/create',
                    text: 'Створити індивідуальний план',
                },
                {
                    path: '/training/programs',
                    text: 'Програми тренування',
                },
                {
                    path: '/team/info',
                    text: 'Інформація про команду',
                },
            ]
        case "player":
            return [
                {
                    path: '/player/plan',
                    text: 'Індивідуальний план',
                },
                {
                    path: '/team/info',
                    text: 'Інформація про команду',
                },
            ]
    }
    return []
}