import styles from ".//Card.module.scss";
import React from "react";

function Card({ title, imageUrl, price, onFavorite, onPlus }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onPlus({title, imageUrl, price});
    setIsAdded(!isAdded);
  };

 
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}>
        <img src="/img/heart1.svg" alt="Unlike" />
      </div>
      <img height={130} width={130} src={imageUrl} alt="Sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <p>{price}</p>
        </div>

        <img
          width={40}
          height={40}
          className="addButton"
          onClick={onClickPlus}
          src={isAdded ? "/img/ok.svg" : "/img/btn-unchecked.svg"}
          alt="plus"
        />
      </div>
    </div>
  );
}

export default Card;
