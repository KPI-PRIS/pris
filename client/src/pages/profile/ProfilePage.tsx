import {UserState} from "../../store/slices/userSlice.ts";
import {useSelector} from "react-redux";
import {StoreState} from "../../store/store.ts";
import {Badge, Card, CardBody, CardHeader, Image, Progress} from "@nextui-org/react";
import {avatarProps} from "../../components/header/actions/utils.ts";
import {getTranslateRole} from "../../utils/utils.ts";

export default function ProfilePage() {
    const user: UserState = useSelector((state: StoreState) => state.user)

    return (
        <>
            {user &&
                <Card className="mt-3 p-3">
                    <Badge content="Редагувати" variant="shadow" color="warning" className="p-2">
                        <CardHeader className=" p-3 flex flex-row space-x-10">
                            <div className="flex flex-col">
                                <Image src={avatarProps.src} height={250} isZoomed/>
                                <p className="flex justify-center">{getTranslateRole(user.role)}</p>
                            </div>
                            <div className="flex flex-col justify-center space-y-3 m-10 rounded w-full h-full px-3">
                                <p className="text-xl space-x-2.5 flex flex-row"><strong>Ім'я:</strong>
                                    <p>{user.name}</p>
                                </p>
                                <p className="text-xl space-x-2.5 flex flex-row"><strong>Пошта:</strong>
                                    <p>{user.email}</p>
                                </p>
                                <p className="text-xl space-x-2.5 flex flex-row"><strong>Телефон:</strong>
                                    <p>{user.phone.length > 0 ? user?.phone : 'Відстуній'}</p></p>
                                {user.role === 'PLAYER' &&
                                    <Progress label="Прогрес по індивідуальному плану:"
                                              color="success"
                                              value={70}
                                              showValueLabel/>}
                            </div>
                        </CardHeader>
                    </Badge>
                    <hr/>
                    <CardBody className="p-3">
                        <div>
                            {/*TODO: Можна додати статистику або зіграні матчи*/}
                        </div>
                    </CardBody>
                </Card>
            }
        </>
    )
}