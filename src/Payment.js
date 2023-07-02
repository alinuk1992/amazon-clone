import React, { useEffect, useState } from "react";
import CheckoutProduct from "./CheckoutProduct";
import styles from "./Payment.module.css";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "axios";

function Payment() {
  const navigate = useNavigate();

  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "POST",
        // stripe expects the total in a currencies subunit
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    // do all the fancy stripe stuff!
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        navigate("/orders", { replace: true });
      });
  };

  const handleChange = (event) => {
    // listen for changes in the CardElement
    // and display any errors as the customer types their card detail
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className={styles.payment}>
      <div className={styles["payment__container"]}>
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* Payment section - Delivery address */}
        <div className={styles["payment__section"]}>
          <div className={styles["payment__title"]}>
            <h3>Delivery Address</h3>
          </div>
          <div className={styles["payment__address"]}>
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        {/* Payment section - Review items */}
        <div className={styles["payment__section"]}>
          <div className={styles["payment__title"]}>
            <h3>Review items and delivery</h3>
          </div>
          <div className={styles["payment__items"]}>
            {basket.map((item, index) => (
              <CheckoutProduct
                key={index}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* Payment section - Payment method */}
        <div className={styles["payment__section"]}>
          <div className={styles["payment__title"]}>
            <h3>Payment Method</h3>
          </div>
          <div className={styles["payment__details"]}>
            {/* Stripe will take care of it! */}

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className={styles["payment__priceContainer"]}>
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Proccessing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
