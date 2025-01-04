import {New} from "./data.ts";
import {Card, CardBody, Image} from "@nextui-org/react";

interface NewCardProps {
    news: New;
    isEndImage?: boolean
}

export default function NewCard({news, isEndImage = true}: NewCardProps) {
    return (
        <Card>
            <CardBody
                className={`flex ${isEndImage ? 'flex-row-reverse' : 'flex-row'} space-x-10 justify-center items-center ${isEndImage ? 'bg-gray-200' : ''}`}>
                <div className="flex flex-col px-1">
                    <Image
                        src={news.image_url}
                        width={500}
                    />
                    <p className="flex justify-center p-1 opacity-75">{news.date}</p>
                </div>
                <div className="w-1/2 space-y-5 px-1">
                    <h1 className="text-2xl font-bold">{news.title}</h1>
                    <p  >{news.content}</p>
                    <p className="flex justify-center text-blue-800 cursor-pointer">Читати більше</p>
                </div>
            </CardBody>
        </Card>
    )
}