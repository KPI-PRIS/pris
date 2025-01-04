import {getCoaches} from "../team/form/http.ts";
import ListUserPage from "../../components/user/ListUserPage.tsx";

export default function CoachesPage() {
    return (
        <ListUserPage
            query={{queryFn: getCoaches, queryKey: 'coaches'}}
            headerText="Список тренерів"
        />
    )
}