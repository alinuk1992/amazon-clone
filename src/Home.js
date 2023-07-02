import React from "react";
import styles from "./Home.module.css";
import background from "./img/background.jpg";
import Product from "./Product";
import hobbit from "./img/hobbit.jpg";
import ryzen from "./img/amd.jpg";
import modem from "./img/modem.jpg";
import tablet from "./img/tablet.jpg";
import book from "./img/ydkjs.jpg";
import monitor from "./img/monitor.jpg";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles["home__container"]}>
        <img
          className={styles["home__image"]}
          src={background}
          alt="background"
        />
        <div className={styles["home__row"]}>
          <Product
            id="1"
            title="The Hobbit: 75th Anniversary Edition Hardcover Illustrated"
            price={13.99}
            image={hobbit}
            rating={5}
          />
          <Product
            id="2"
            title="AMD Ryzen 7 5800X 8-core, 16-Thread Unlocked Desktop Processor"
            price={248.99}
            image={ryzen}
            rating={3}
          />
        </div>
        <div className={styles["home__row"]}>
          <Product
            id="3"
            title="TP-Link AX1800 WiFi 6 Router (Archer AX21) – Dual Band Wireless Internet Router, Gigabit Router, USB port"
            price={106.88}
            image={modem}
            rating={4}
          />{" "}
          <Product
            id="4"
            title="Samsung Galaxy S8 Tablet"
            price={899.99}
            image={tablet}
            rating={5}
          />{" "}
          <Product
            id="5"
            title="You Don't Know JS Yet: Scope & Closures Second Edition"
            price={28.45}
            image={book}
            rating={5}
          />
        </div>
        <div className={styles["home__row"]}>
          <Product
            id="6"
            title="SAMSUNG 34-Inch SJ55W Ultrawide Gaming Monitor (LS34J550WQNXZA) – 75Hz Refresh, WQHD Computer Monitor, 3440 x 1440p Resolution, 4ms Response, FreeSync, Split Screen, HDMI, Black"
            price={287.99}
            image={monitor}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
