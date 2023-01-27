import "./App.css";

import NavBar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";
import cardData from "./card.json";

function App() {
  const cardInfo = cardData.map((data) => (
    <Card
      key={data.id}
      //we can also use like this instead of data={data} but using this data={data} is much better than doing like this because we can understand easily
      // {...data}
      data={data}
    />
  ));
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <div className="card-container">{cardInfo}</div>
    </div>
  );
}

export default App;
