import Image from "next/image";
import styles from '../styles/mainApp.module.css';
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.topRow}>
                <div className={styles.logo}>
                    <Link href="/">
                        <Image src="/logo.jpeg" alt="Munich RE" width={150} height={100}/>
                    </Link>
                    <div className={styles.underlogo}>
                        Munich Re Automation Solutions Ltd
                    </div>
                </div>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link href="/WhoWeAre">Who We Are</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/TheTeam">The Team</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/LifeInsurance">Life Insurance</Link>
                    </li>
                    <li className={styles.navItemRight}>
                        <Link href="/UserPage">Login/Register</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;

