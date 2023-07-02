import React from "react";
import styles from "./Product.module.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className={styles.product}>
      <div className={styles["product__info"]}>
        <p>{title}</p>
        <p className={styles["product__price"]}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={styles["product__rating"]}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={image} alt="/" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
