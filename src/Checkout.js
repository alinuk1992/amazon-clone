import React from "react";
import styles from "./Checkout.module.css";
import CheckoutProduct from "./CheckoutProduct";
import banner from "./img/checkout-banner.jpg";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ user, basket }, dispatch] = useStateValue();

  return (
    <div className={styles.checkout}>
      <div className={styles["checkout__left"]}>
        <img className={styles["checkout__ad"]} src={banner} alt="" />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className={styles["checkout__title"]}>Your Shopping Basket</h2>
          {basket.map((item, index) => {
            return (
              <CheckoutProduct
                key={index}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            );
          })}
        </div>
      </div>

      <div className={styles["checkout__right"]}>
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
