import "./App.css";
import { useState, useEffect } from 'react';

const srcArray = [
  { src: "black-1.jpg", matched: false },
  { src: "black-2.jpg", matched: false },
  { src: "yellow-1.jpg", matched: false },
  { src: "yellow-2.jpg", matched: false },
  { src: "yellow-3.jpg", matched: false },
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
      <div className="container"></div>
    </>
  );
};

export default App;
