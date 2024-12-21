import {useParams} from "react-router";
import {Card, CardHeader} from "@nextui-org/react";

export default function MatchPage() {
    const {id} = useParams()
    return (
        <Card>
            <CardHeader>
                <div>{id}</div>
            </CardHeader>
        </Card>
    )
}