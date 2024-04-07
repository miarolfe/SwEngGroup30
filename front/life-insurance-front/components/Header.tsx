"use client";
import React, { useEffect, useState } from 'react';
import HeaderButton from './HeaderButton';
import IconButton from './IconButton';
import { signOut, useSession } from 'next-auth/react';

const Header: React.FC = () => {
    const {data: session} = useSession();
    const [accountButton, setAccountButton] = useState("Login");
    const [accountLink, setAccountLink] = useState("/login");
    
    useEffect( () => {
        if (!session) {
            setAccountButton("Login");
            setAccountLink("/login");
        } else {
            setAccountButton("Logout");
            setAccountLink("/");
        }
        console.log(session);
    }, [session]);

    function handleSignOut(e: React.SyntheticEvent) {
        e.preventDefault();
        if (session) {
            signOut({
                redirect: true,
                callbackUrl: "/"
            });
        }
    }

    return (
        <header className="header-bg top-0 sticky">
            <div className="grid grid-cols-3 text-center">
                <HeaderButton link="/team" label="The Team" />
                <IconButton link="/" imgSrc="/logo.png" />
                {session ? <div onClick={handleSignOut}><HeaderButton link={accountLink} label={accountButton} /></div> : <HeaderButton link={accountLink} label={accountButton} />}
            </div>
        </header>
    );
};

export default Header;
