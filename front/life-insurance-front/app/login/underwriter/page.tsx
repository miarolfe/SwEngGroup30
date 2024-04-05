'use client'
import '../../../app/globals.css';
import React, { useState } from 'react';
import Image from "next/image";
import styles from '../../../styles/mainApp.module.css';
import { signIn } from 'aws-amplify/auth';

const LoginPage = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [response, setResponse] = useState<string | null>(null);
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('login process started');

        try {
            const user = await signIn({username, password});
            console.log(user); // User is signed in
            const response = await fetch(`/api/quoteRequest/get`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.ok) {
                console.log('Login successful');
                const data = await response.json();
                setResponse(JSON.stringify(data));
                // Handle success
            } else {
                // Handle error
                setResponse('request failed' + response.status);
            }
        } catch (error) {
            console.error('Login failed', error);
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
            {response && (
                <div className="mt-4">
                    <p>Response from server:</p>
                    <div className="p-4 bg-gray-200 rounded">{response}</div>
                </div>
            )}
        </div>
    );

};

export default LoginPage;