import React from 'react';
import HeaderButton from './HeaderButton';
import IconButton from './IconButton';

const Header: React.FC = () => {
    return (
        <header className="header-bg top-0 sticky">
            <div className="grid grid-cols-3 text-center">
                <HeaderButton link="/team" label="The Team" />
                <IconButton link="/" imgSrc="/logo.png" />
                <HeaderButton link="/login" label="Login" />
            </div>
        </header>
    );
};

export default Header;
