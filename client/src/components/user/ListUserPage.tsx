import {User} from "../../store/slices/userSlice.ts";
import {Card, CardBody, CardHeader} from "@nextui-org/react";
import {useQuery} from "react-query";
import LoadingSpinner from "../LoadingSpinner.tsx";
import CardUser from "./CardUser.tsx";

interface ListUserPageProps {
    query: {
        queryFn: () => Promise<User[]>,
        queryKey: string
    },
    headerText: string;
}

export default function ListUserPage({query, headerText}: ListUserPageProps) {
    const {data: users, isLoading} = useQuery({...query})

    return (
        <Card className="m-3 p-3">
            <CardHeader className="text-4xl font-bold flex justify-center">{headerText}</CardHeader>
            <hr/>
            <CardBody>
                {isLoading && <LoadingSpinner isVisible={isLoading}/>}
                <div className="grid grid-cols-3 gap-y-5 px-5 space-x-1">
                    {users && users.map((user) => <CardUser user={user}/>)}
                </div>
            </CardBody>
        </Card>
    )
}