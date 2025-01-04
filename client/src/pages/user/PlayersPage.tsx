import {getPlayers} from "../team/form/http.ts";
import ListUserPage from "../../components/user/ListUserPage.tsx";

export default function PlayersPage() {
    return (
        <ListUserPage
            query={{queryFn: getPlayers, queryKey: 'players'}}
            headerText="Список гравців"
        />
    )
}