import Image from "next/image";
import styles from '../styles/mainApp.module.css';
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div className={styles.logo}>
                <Link href="/">
                    <a>
                        <Image src="/logo.jpeg" alt="Munich RE"/>
                    </a>
                </Link>
            </div>
            <div className={styles.underlogo}>
                Munich Re Automation Solutions Ltd
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/WhoWeAre"> <a> Who We Are </a> </Link>
                    </li>
                    <li>
                        <Link href="/TheTeam"> <a> The Team </a> </Link>
                    </li>
                    <li>
                        <Link href="/LifeInsurance"> <a> Life Insurance </a> </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );

};

export default Header;