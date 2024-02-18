import Image from "next/image";
import styles from '../styles/mainApp.module.css';
import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div className={styles.logo}>
                <Link href="/">
                    
                        <Image src="/logo.jpeg" alt="Munich RE" width={200} height={120}/>
                    
                </Link>
            </div>
            <div className={styles.underlogo}>
                Munich Re Automation Solutions Ltd
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/WhoWeAre">  Who We Are  </Link>
                    </li>
                    <li>
                        <Link href="/TheTeam">  The Team  </Link>
                    </li>
                    <li>
                        <Link href="/LifeInsurance"> Life Insurance  </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );

};

export default Header;