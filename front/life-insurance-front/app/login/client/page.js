"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGoogle, faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons';
import {signIn} from "next-auth/react";
import Layout from "../../../components/Layout";

const LoginClient = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await signIn("credentials", {
                email: username,
                password,
                redirect: false
            });

            if (res.error) {
                console.log("Invalid Crentials");
                return
            }

            await router.push('/UserNavPage')
            console.log("hurray");

        } catch (error) {
            console.log(error);
        }

        // const response = await fetch('/api/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ username, password }),
        // });
        // if (response.ok) {
        //     const data = await response.json();
        //     onLogin(data);


        //     router.push ('/question-page')
        // }
        // else {
        //     console.error ('Login failed');
        // }
    };

    const handleRegister = async (e) => {
        try {
            const resUserExists = await fetch("/api/userExists", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email: username})
            });

            const {user} = await resUserExists.json();
            if (user) {
                console.log("User Exists");
                return;
            }

            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: username,
                    password
                })
            });

            if (res.ok) {
                console.log("Worked");
            }
        } catch (error) {

        }
    }

    return (
      <Layout>
        <div className="main-bg flex flex-col justify-center items-center">
            <form onSubmit={handleLogin} className="w-80">
                <div className="mb-4">
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
            <div className="mt-8 flex space-x-4">
                <button className="bg-blue-700 text-white px-4 py-2 rounded-md flex items-center justify-center space-x-2">
                    <FontAwesomeIcon icon={faFacebook} />
                    <span>Facebook</span>
                </button>
                <button className="bg-red-600 text-white px-4 py-2 rounded-md flex items-center justify-center space-x-2">
                    <FontAwesomeIcon icon={faGoogle} />
                    <span>Google</span>
                </button>
                <button className="bg-blue-400 text-white px-4 py-2 rounded-md flex items-center justify-center space-x-2">
                    <FontAwesomeIcon icon={faTwitter} />
                    <span>Twitter</span>
                </button>
            </div>
            <div className="mt-4" onClick={handleRegister}>
                <h4 className="text-blue-200 hover:underline">Register new account</h4>
            </div>
        </div>
      </Layout>
    );

};

export default LoginClient;