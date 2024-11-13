import {useQuery} from "react-query";
import {getUsers, User} from "./user-service.ts";


export default function UsersPage() {
    const {isLoading, error, data} = useQuery<User[], Error>('users', getUsers)

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <>
            {data && data.map((u: User) => (
                <>
                    <div>id : {u.id}</div>
                    <div>name : {u.name}</div>
                </>
            ))}
        </>
    )
}