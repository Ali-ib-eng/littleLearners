import type { NavItem } from "../../interfaces";
import NavBar from "../NavBar/NavBar";
import TopBanner from "../TopBanner/TopBanner";
import styles from "./Header.module.css";

const Header = () => {
    
    const navItems :NavItem[]=[
        {
        link:"Home",
        href:"#Home"
        },
        {
        link:"About Us",
        href:"#AboutUs"
        },
        {
        link:"Academics",
        href:"#Academics"
        },
        {
        link:"Admissions",
        href:"#Admissions"
        },
        {
        link:"Student Life",
        href:"#StudentLife"
        },
        {
        link:"Contact",
        href:"#Contact"
        }
]
        
    return (
        <>
            <header className={styles.header}>
            <TopBanner text="Admission is Open, Grab your seat now" href="#admissions" />
            </header>
            <NavBar navItems={navItems}/>
            
        </>
    )
}

export default Header
