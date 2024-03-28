import Image from "next/image";
import styles from '../styles/mainApp.module.css';
import Link from "next/link";
import HeaderButton from '../components/HeaderButton'

const Header = () => {
    return (
        <header className="header-bg pt-2">
            <div className="grid grid-cols-1 justify-items-center header-logo-div   ">
                <Link href="/">
                    <Image src="/logo.png" alt="Munich RE" width={250} height={150} />
                </Link>
            </div>
            <div className="grid grid-cols-5 pt-2 text-center">
                <HeaderButton link="/WhoWeAre" label="About" />
                <HeaderButton link="/TheTeam" label="The Team" />
                <HeaderButton link="/" label="Home"></HeaderButton>
                <HeaderButton link="/LifeInsurance" label="Insurance" />
                <HeaderButton link="/UserPage" label="Login" />
            </div>
        </header>
    );
};

export default Header;

