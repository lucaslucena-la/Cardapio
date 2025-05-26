// Importações do axios e tipagem da resposta
import axios, { type AxiosPromise } from "axios";

// Importação do tipo que define a estrutura de um item de comida
import type { FoodData } from "../interface/FoodData";

// Hook do React Query para fazer requisições e cache automático
import { useQuery } from "@tanstack/react-query";

// URL base da API backend
const API_URL = "http://localhost:8080";

// Função assíncrona que faz uma requisição GET para buscar os dados
const fetchData = async (): AxiosPromise<FoodData[]> => {
    const response = axios.get(API_URL + '/food'); // Endpoint da API
    return response; // Retorna a Promise contendo a resposta do Axios
};

// Hook personalizado que usa React Query para buscar os dados
export function useFoodData() {
    const query = useQuery({
        queryFn: fetchData,              // Função que será executada para buscar os dados
        queryKey: ['food-Data'],         // Chave única do cache da requisição
        retry: 2                         // Número de tentativas de retry em caso de erro
    });

    return {
        ...query,                        // Retorna todos os dados do useQuery (isLoading, isError, etc.)
        data: query.data?.data           // Extração dos dados reais (data é aninhado dentro do response do axios)
    };
}
