// Importa o arquivo de estilos CSS específico para o card.
// Ele é responsável pela aparência visual do componente.
import "./card.css";

// Define uma interface que descreve os dados que o componente espera receber via props.
// Isso fornece segurança de tipo no TypeScript.
interface CardProps {
    price: number;   // Preço do item (ex: 25)
    title: string;   // Nome do item (ex: "Pizza")
    image: string;   // URL da imagem do item
}

// Função que define o componente funcional `Card`, usando os props definidos acima.
// As props são desestruturadas diretamente na assinatura da função.
export function Card({ price, image, title }: CardProps) {
    return (
        <div className="card">
            {/* Exibe a imagem do item.
                O atributo `alt` é importante para acessibilidade.
                Você pode adicionar um `onError` para tratar URLs inválidas. */}
            <img src={image} alt={`Imagem de ${title}`} />

            {/* Exibe o título do item (nome do prato) */}
            <h2>{title}</h2>

            {/* Exibe o preço do item, precedido pelo rótulo "Valor:" */}
            <p><b>Valor:</b> {price}</p>
        </div>
    );
}
