import {useEffect, useState} from "react";
import {useQuery} from "react-query";
import {getMerches} from "./http.ts";
import {IMerch, IMerchPagination} from "../../components/merch/IMerch.ts";
import {Pagination} from "@nextui-org/react";
import MerchCard from "../../components/merch/MerchCard.tsx";
import LoadingSpinner from "../../components/LoadingSpinner.tsx";

export default function MerchandiseListPage() {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const {data, isLoading, refetch} = useQuery<IMerchPagination>({
        queryKey: [`merch-${currentPage}`],
        queryFn: () => getMerches(currentPage)
    })

    useEffect(() => {
        refetch()
    }, [currentPage]);

    return (<>
        <div className="text-5xl text-white p-5 bg-black text-center font-extrabold border-2 rounded-b-xl">
            Фан-шоп
        </div>
        <LoadingSpinner isVisible={isLoading} text="товари"/>
        {data &&
            <>
                <div className="grid grid-cols-3 gap-4 mt-3">
                    {data.datas.map((merch: IMerch) => <MerchCard key={merch.id} merch={merch}/>)}
                </div>
                {data.totalPages > 1 &&
                    <Pagination isCompact
                                showControls
                                initialPage={currentPage}
                                onChange={(page: number) => setCurrentPage(page)}
                                className="flex justify-center mt-0.5"
                                total={data.totalPages}
                                color="warning"
                    />}
            </>
        }
    </>)
}