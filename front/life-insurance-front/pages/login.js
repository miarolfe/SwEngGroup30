import LoginClient from './Login/loginClient';



const Login = () => {
    const handleLogin = () => {

    }
    return (
        <div>
            <LoginClient onLogin={handleLogin} />
        </div>
    );
};

export default Login;