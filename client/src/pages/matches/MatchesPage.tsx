import {useQuery} from "react-query";
import {getMatches} from "./http.ts";
import {Match, MatchPagination} from "./IMatch.ts";
import MatchShortInfo from "../../components/match/MatchShortInfo.tsx";
import {Pagination} from "@nextui-org/react";
import {useEffect, useState} from "react";

export default function MatchesPage() {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const {data, isLoading, refetch} = useQuery<MatchPagination>({
        queryKey: [`match-${currentPage}`],
        queryFn: () => getMatches(currentPage)
    })

    useEffect(() => {
        refetch()
    }, [currentPage]);

    return (<>
        <div className="text-5xl text-white p-5 bg-black text-center font-extrabold border-2 rounded-b-xl">
            Матчи
        </div>
        {isLoading && <p>Вантаження даних</p>}
        {data &&
            <>
                <div className="flex flex-col items-center">
                    {data.matches.map((match: Match) => <MatchShortInfo key={match.id} match={match}/>)}
                </div>
                <Pagination isCompact
                            showControls
                            initialPage={currentPage}
                            onChange={(page: number) => setCurrentPage(page)}
                            className="flex justify-center"
                            total={data.totalPages}
                            color="warning"
                />
            </>
        }
    </>)
}