
import './App.css'
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';

function App() {
  const {data} = useFoodData();

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid"></div>
      {data?.map(foodData => 
        <Card 
          key={foodData.id}  
          price ={foodData.price} 
          title ={foodData.title} 
          image ={foodData.image}/>)}
    </div>
  )
}

export default App
