import "./App.css";
import { useState, useEffect } from 'react';
import Card from "./components/card";

const srcArray = [
  { src: "./assets/black-1.jpg", matched: false },
  { src: "./assets/black-2.jpg", matched: false },
  { src: "./assets/yellow-1.jpg", matched: false },
  { src: "./assets/yellow-2.jpg", matched: false },
  { src: "./assets/yellow-3.jpg", matched: false },
];

function App() {
  const [cards, setCards] = useState([]);

  const shuffleCards = () => {
    const shuffleArray = [...srcArray, ...srcArray]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffleArray);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    console.log(cards);
  }, [cards]);

  return (
    <>
      <h1 className="heading">五倍紙牌遊戲</h1>
      <div className="flex">
        <button className="restart">New Game</button>
      </div>
      <div className="container">
        {cards.map((item) => {
          return (
            <Card key={item.id} card={item} />
          )
        })}
      </div>
    </>
  );
};

export default App;
