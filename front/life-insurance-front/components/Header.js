'use client'

import HeaderButton from '../components/HeaderButton'
import IconButton from '../components/IconButton'


const Header = () => {
    return (
        <header className="header-bg top-0 sticky">
            <div className="grid grid-cols-3 text-center">
                <HeaderButton link="/team" label="The Team" />
                <IconButton link="/" imgSrc="/logo.png"/>
                <HeaderButton link="/login" label="Login" />
            </div>
        </header>
    );
};

export default Header;

