'use client'
import '../../../app/globals.css';
import React, { useState } from 'react';
import Image from "next/image";
import styles from '../../../styles/mainApp.module.css';
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";


const LoginPage = () => {
    const router = useRouter();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
  
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      try {
        const res = await signIn("credentials", {
          email: username,
          password,
          redirect: false,
        });
  
        if (!res || res.error) {
          console.log("Invalid Crentials");
          return;
        }
  
        await router.push("/underwriter");
        console.log("hurray");
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleRegister = async (
      e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
      try {
        const resUserExists = await fetch("/api/userExists", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: username }),
        });
  
        const { user } = await resUserExists.json();
        if (user) {
          console.log("User Exists");
          return;
        }
  
        const res = await fetch("/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: username,
            password,
          }),
        });
  
        if (res.ok) {
          console.log("Worked");
        }
      } catch (error) {
        console.log(error);
      }
    };


    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <form onSubmit={handleLogin} className="w-80">
                <div className="mb-4">
                    <div className={styles.loginLogo}>
                        <Image src="/logo.png" alt="Munich RE" width={150} height={100}/>
                    </div>
                    <label htmlFor="username" className="block mb-2">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">Login</button>
            </form>
        </div>
    );

};

export default LoginPage;