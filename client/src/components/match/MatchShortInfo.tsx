import {Match} from "../../pages/matches/IMatch.ts";
import {Button, Card, Image} from "@nextui-org/react";
import {formatDateToUkrainian} from "../../utils/utils.ts";
import {useNavigate} from "react-router";

interface MatchShortInfoProps {
    match: Match
}

export default function MatchShortInfo({match}: MatchShortInfoProps) {
    const nav = useNavigate();

    return (
        <Card className=" flex flex-row my-3 w-4/5  items-center p-3">
            <div className="w-1/4 flex-col">
                <div className="flex flex-row justify-around items-center">
                    <Image src={match.home_team_logo} width={50}/>
                    <p className="items-center">vs</p>
                    <Image src={match.opponent_logo} width={50}/>
                </div>
                <div className="flex justify-center">
                    {formatDateToUkrainian(match.date)}
                </div>
            </div>
            <div className="flex flex-col w-full mx-3 space-y-1">
                <div className="text-2xl">
                    <strong>{match.home_team}</strong> vs <strong>{match.opponent}</strong>
                </div>
                <hr/>
                <div>
                    <p>Час: {match.time}. Місце: {match.where}</p>
                </div>
                <div>
                    <div> Кількість квитків: {match.count_of_tickets} </div>
                    <div className="flex justify-end">
                        <Button color="success" onPress={() => nav(`/match/${match.id}`)}>
                            Купити від {match.price_start_from} грн</Button>
                    </div>
                </div>
            </div>
        </Card>
    )
}