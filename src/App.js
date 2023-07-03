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
  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffleArray = [...srcArray, ...srcArray]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffleArray);
  };

  const atClick = (card) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card);
  };

  const resetTurn = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    setDisabled(false);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (firstChoice && secondChoice) {
      setDisabled(true)
      if (firstChoice.src === secondChoice.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === firstChoice.src) {
              return { ...card, matched: true }
            }
            return card
          })
        })
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [firstChoice, secondChoice]);

  return (
    <>
      <h1 className="heading">五倍紙牌遊戲</h1>
      <div className="flex">
        <button className="restart">New Game</button>
      </div>
      <div className="container">
        {cards.map((item) => {
          return (
            <Card
              card={item}
              key={item.id}
              handleClick={atClick}
              flipped={item === firstChoice || item === secondChoice || item.matched}
              disabled={disabled}
           />
          )
        })}
      </div>
    </>
  );
};

export default App;
