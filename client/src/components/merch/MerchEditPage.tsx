import MerchForm from "./MerchForm.tsx";
import axios from "axios";
import {HEADER_AUTH} from "../../utils/utils.ts";
import {IMerch} from "./IMerch.ts";
import {useParams} from "react-router";
import {useQuery} from "react-query";
import {getMerchById} from "../../pages/merchandise/http.ts";
import LoadingSpinner from "../LoadingSpinner.tsx";
import {useEffect} from "react";

async function addNewMerch(values: any): Promise<IMerch> {
    const data = await axios.post<IMerch>('/merchandise/create', values, {headers: HEADER_AUTH})
    return data.data;
}

async function editMerch(values: any): Promise<IMerch> {
    const data = await axios.put<IMerch>('/merchandise/update', values, {headers: HEADER_AUTH})
    return data.data;
}


export default function MerchEditPage() {
    const {id} = useParams();
    if (id === 'create' || !id) {
        return (<MerchForm headerText="Додати новий товар"
                           buttonText="Додати"
                           notifyText="Товар був успішно доданий"
                           handleSubmit={addNewMerch}
        />)
    }

    const {data: merch, isLoading, refetch} = useQuery<IMerch>({
        queryKey: `merch-${id}`,
        queryFn: () => getMerchById(id),
        enabled: false,
    })

    useEffect(() => {
        refetch();
    }, []);

    if (isLoading) {
        return <LoadingSpinner isVisible text="товар"/>
    }
    return (<MerchForm headerText="Редагувати товар"
                       buttonText="Зберегти"
                       merch={merch}
                       notifyText="Товар був успішно редагований"
                       handleSubmit={editMerch}
    />)
}