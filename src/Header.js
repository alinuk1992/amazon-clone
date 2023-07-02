import React from "react";
import styles from "./Header.module.css";
import logo from "./img/logo.png";
import { FaSearch, FaShoppingBag } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

function Header() {
  const [{ user, basket }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      signOut(auth);
    }
  };

  return (
    <div className={styles.header}>
      <Link to="/">
        <img src={logo} alt="logo" className={styles["header__logo"]} />
      </Link>
      <div className={styles["header__search"]}>
        <input type="text" className={styles["header__searchInput"]} />
        {/* logo */}
        <FaSearch className={styles["header__searchIcon"]} />
      </div>
      <div className={styles["header__nav"]}>
        <Link to={!user && "/login"}>
          <div
            onClick={handleAuthentication}
            className={styles["header__option"]}
          >
            <span className={styles["header__optionLineOne"]}>
              Hello {!user ? "Guest" : `${user.email}`}
            </span>
            <span className={styles["header__optionLineTwo"]}>
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        <div className={styles["header__option"]}>
          <span className={styles["header__optionLineOne"]}>Returns</span>
          <span className={styles["header__optionLineTwo"]}>& Orders</span>
        </div>
        <div className={styles["header__option"]}>
          <span className={styles["header__optionLineOne"]}>Your</span>
          <span className={styles["header__optionLineTwo"]}>Prime</span>
        </div>
        <Link to="/checkout">
          <div className={styles["header__optionBasket"]}>
            <FaShoppingBag />
            <span
              className={
                styles[("header__optionLineTwo", "header__basketCount")]
              }
            >
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
