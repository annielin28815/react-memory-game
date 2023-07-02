function Card({ card }) {
  return (
    <div key={card.id}>
      <img src="./assets/rear.svg" alt="card-back" width="200" />
      <img src={card.src} alt="card-pic" width="200" />
    </div>
  );
};

export default Card;
