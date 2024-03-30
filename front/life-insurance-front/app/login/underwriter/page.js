'use client'
import { useState } from "react";
import Image from "next/image";
import Layout from "../../../components/Layout";

const LoginUnderwriter = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      const data = await response.json();
      onLogin(data);


      router.push('/question-page')
    }
    else {
      console.error('Login failed');
    }
  };

  return (
    <Layout>
      <div className="main-bg flex flex-col justify-center items-center">
        <form onSubmit={handleLogin} className="w-80">
          <div className="mb-4">
            <div>
              <Image src="/logo.jpeg" alt="Munich RE" width={150} height={100} />
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
    </Layout>
  );

};

export default LoginUnderwriter;