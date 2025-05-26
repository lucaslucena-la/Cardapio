// Importa os hooks do React Query
import { useMutation, useQueryClient } from "@tanstack/react-query";

// Importa o Axios e sua tipagem de promessa
import axios, { type AxiosPromise } from "axios";

// Importa a tipagem do dado a ser enviado
import type { FoodData } from '../interface/FoodData';

// Define a URL base da API
const API_URL = 'http://localhost:8080';

// Função responsável por fazer o POST dos dados no endpoint /food
const postData = async (data: FoodData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/food', data);
    return response; // Retorna a resposta do Axios
}

// Hook personalizado para fazer a mutação (inserção de dados)
export function useFoodDataMutate() {
    // Acesso ao cache do React Query
    const queryClient = useQueryClient();

    // Cria a mutação com React Query
    const mutate = useMutation({
        mutationFn: postData, // Função que será chamada ao executar mutate()
        retry: 2,             // Tenta novamente até 2 vezes em caso de erro

        // Quando a requisição der certo, invalida a cache da lista para refazer o GET
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['food-data'] });
            // 🔁 Isso força o React Query a refazer o fetch da lista de comidas
        }
    });

    return mutate; // Retorna o objeto mutate com isLoading, isSuccess, mutate(), etc.
}
