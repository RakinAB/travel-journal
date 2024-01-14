import Navbar from "./components/Navbar"
import Card from "./components/Card"
import tripData from "./components/Trips"
import './App.css';

export default function App() {
  
  const tripElements = tripData.map(item =>{
    return(
      <Card 
        key={item.id}
        {...item}
      />
    )
  })
  
  return (
    <div className="App">
      <Navbar />
      <section className="trip-list">
        {tripElements}
      </section>
    </div>
  );
}
