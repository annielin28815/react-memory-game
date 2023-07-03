import "./card.css"

function Card({ card, handleClick, flipped, disabled }) {
  const onClick = () => {
    if (!disabled) {
      handleClick(card)
    }
  }

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} alt="card-pic" width="200" className="front" />
        <img
          src="./assets/rear.svg"
          alt="card-back"
          width="200"
          height="300"
          className="rear"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default Card;
