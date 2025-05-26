import axios, { type AxiosPromise } from "axios"
import type { FoodData } from "../interface/FoodData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://localhost:8080";

//função do acios que vai fazer o fetch no backend
const fetchData = async (): AxiosPromise <FoodData[]> => {
    const response = axios.get(API_URL + '/food');
    return response;

}

export function useFoodData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['food-Data'],
        retry:2
    })

    return{
        ...query,
        data: query.data?.data //axios retorna um objeto com a propriedade data
    }
}