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
    isDisable?: boolean;
}

export function getListActionsByRole(role: string): Action[] {
    switch (role.toLowerCase()) {
        case "admin":
            return [
                {
                    path: '/auth-admin/match/manage',
                    text: 'Керувати матчами',
                    isDisable: true,
                },
                {
                    path: '/auth-admin/orders/manage',
                    text: 'Список замовлень',
                    isDisable: true,
                },
                {
                    path: '/auth-admin/state/manage',
                    text: 'Список заяв',
                    isDisable: true,
                },
                {
                    path: '/auth-admin/team/manage',
                    text: 'Створити команду',
                },
                {
                    path: '/auth-admin/user/manage',
                    text: 'Додати користувача',
                },
                {
                    path: '/auth-admin/news/manage',
                    text: 'Додати новину',
                },
                {
                    path: '/auth-admin/merch/manage/create',
                    text: 'Додати товар',
                },
            ]
        case "coach":
            return [
                {
                    path: '/team/plan/create',
                    text: 'Створити план команди',
                    isDisable: true,
                },
                {
                    path: '/player/plan/create',
                    text: 'Створити індивідуальний план',
                    isDisable: true,
                },
                {
                    path: '/training/programs',
                    text: 'Програми тренування',
                    isDisable: true,
                },
                {
                    path: '/team/info',
                    text: 'Інформація про команду',
                    isDisable: true,
                },
            ]
        case "player":
            return [
                {
                    path: '/player/plan',
                    text: 'Індивідуальний план',
                    isDisable: true,
                },
                {
                    path: '/team/info',
                    text: 'Інформація про команду',
                    isDisable: true,
                },
            ]
    }
    return []
}