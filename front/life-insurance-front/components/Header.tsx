"use client";
import React, { useEffect, useState } from 'react';
import HeaderButton from './HeaderButton';
import IconButton from './IconButton';
import { signOut, useSession } from 'next-auth/react';

const Header: React.FC = () => {
    const {data: session} = useSession();
    const [accountButton, setAccountButton] = useState("");
    const [accountLink, setAccountLink] = useState("/login");
    const [homeLink, setHomeLink] = useState("/");
    
    useEffect(() => {
        if (!session) {
            setAccountButton("Login");
            setAccountLink("/login");
        } else {
            setAccountButton("Logout");
            setAccountLink("/");
            setHomeLink("/UserNavPage")
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
    <header className="flex items-center glass-slate h-20 w-full top-0 sticky text-white px-4 z-20">
      <div className="flex items-center justify-center h-full w-1/6 px-2">
        <a href="/">
          <img src="/munich_logo_name_white.png" width="90%" />
        </a>
      </div>
      <div className="grow flex justify-around text-xl">
        <a href={homeLink}>Home</a>
        <a href="/team">The Team</a>
      </div>
      {session ? <div onClick={handleSignOut}><a className="border-[1px] border-white py-2 px-6 rounded-md transition-all hover:bg-white hover:text-violet-700" href={accountLink}>{accountButton}</a></div> : <a className="border-[1px] border-white py-2 px-6 rounded-md transition-all hover:bg-white hover:text-violet-700" href={accountLink}>{accountButton}</a>}
    </header>
  );
};

export default Header;
