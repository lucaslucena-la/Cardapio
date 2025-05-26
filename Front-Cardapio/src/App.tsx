import { useState } from 'react' // Importa o hook para controle de estado (modal aberto/fechado)
import './App.css' // Importa o CSS da aplicação

// Importa o componente visual do card
import { Card } from './components/card/card';

// Importa o hook que faz o fetch dos dados do backend
import { useFoodData } from './hooks/useFoodData';

// Importa o modal para criar novos itens
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  // Busca os dados da API com o hook customizado
  const { data } = useFoodData();

  // Controla se o modal está aberto ou fechado
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Alterna o estado do modal (abrir/fechar)
  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container"> {/* Container centralizado */}
      <h1>Cardápio</h1>

      {/* Grid com os cards retornados da API */}
      <div className="card-grid">
        {data?.map(foodData => 
          <Card
            key={foodData.id} // Importante adicionar uma key única (melhorar performance do React)
            price={foodData.price} 
            title={foodData.title} 
            image={foodData.image}
          />
        )}
      </div>

      {/* Renderiza o modal se o estado estiver true */}
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}

      {/* Botão fixo para abrir o modal */}
      <button onClick={handleOpenModal}>novo</button>
    </div>
  )
}

export default App
