import LoginPage from '../components/loginPage';



const Login = () => {
    const handleLogin = () => {

    }
    return (
        <div>
            <LoginPage onLogin={handleLogin} />
        </div>
    );
};

export default Login;