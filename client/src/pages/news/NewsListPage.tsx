import {Card} from "@nextui-org/react";
import {newsList} from "./data.ts";
import NewCard from "./NewCard.tsx";

export default function NewsListPage() {
    return (
        <Card className="m-3 p-5 space-y-5">
            <h1 className="text-4xl font-bold flex justify-center">Новини</h1>
            <hr/>
            {newsList.map((value, index) => <NewCard news={value} isEndImage={index % 2 === 0}/>)}
        </Card>
    )
}