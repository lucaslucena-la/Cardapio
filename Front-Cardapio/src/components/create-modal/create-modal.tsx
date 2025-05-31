// Importações essenciais do React
import { useEffect, useState } from 'react';

// Hook personalizado que envia os dados para o backend via POST
import { useFoodDataMutate } from '../../hooks/useFoodDataMutate';

// Tipagem da estrutura de dados de um alimento
import type { FoodData } from '../../interface/FoodData';

// Estilo do modal
import "./modal.css";

// Interface para os inputs reutilizáveis do formulário
interface InputProps {
    label: string,                      // Nome do campo (ex: "title", "price")
    value: string | number,            // Valor atual do input
    updateValue(value: any): void      // Função para atualizar o valor
}

// Interface para as props do componente de modal
interface ModalProps {
    closeModal(): void                 // Função para fechar o modal
}

// Componente Input para reuso no formulário
const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input
                value={value}
                onChange={event => updateValue(event.target.value)}
            />
        </>
    );
};

// Componente principal do modal
export function CreateModal({ closeModal }: ModalProps) {
    // Estados dos campos do formulário
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");

    // Hook de mutação (envio de dados)
    const { mutate, isSuccess, isLoading } = useFoodDataMutate();

    // Função chamada ao clicar no botão "postar"
    const submit = () => {
        const foodData: FoodData = {
            title,
            price,
            image
        };
        mutate(foodData); // Envia para a API
    };

    // Fecha o modal automaticamente quando a requisição for bem-sucedida
    useEffect(() => {
        if (!isSuccess) return;
        closeModal();
    }, [isSuccess]);

    // Estrutura do modal na tela
    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label="title" value={title} updateValue={setTitle} />
                    <Input label="price" value={price} updateValue={setPrice} />
                    <Input label="image" value={image} updateValue={setImage} />
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? 'postando...' : 'postar'}
                </button>
                <button onClick={closeModal} className="btn-cancel">
                voltar
                </button>

            </div>
        </div>
    );
}
