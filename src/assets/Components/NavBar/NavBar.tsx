
import { useState } from "react";
import { HiOutlineBars3BottomRight, HiOutlineXMark } from "react-icons/hi2";
import type { NavBarProps } from "../../interfaces";
import styles from "./NavBar.module.css";

const NavBar = ({navItems}: NavBarProps) => {
  const [isShow, setIsShow]=useState(false);

  return (
    <nav className={styles.navbar}>
      <a  className={styles.mylogo}>
        <img src="./img/Logo.png" alt="Little Learners"/>
      </a>

      <button
        type="button"
        className={styles.navbtn}
        onClick={() => setIsShow(!isShow)}
      >
        {isShow?<HiOutlineXMark />:<HiOutlineBars3BottomRight/>}
      </button>

      <ul className={`${styles.navlist} ${isShow ? styles.open : ""}`}>
        {navItems.map(({link,href }) => (
          <li key={href} className={styles.item}>
            <a href={href} className={styles.link} onClick={() => setIsShow(false) }>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
