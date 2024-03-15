import LoginPage from '../components/loginPage';



const Login = () => {
    const handleLogin = (username, password) => {
        fetch('../app/api/userExists', {
            // fetch content from existing users





        //     if (isStaff(username, password)){

        //     }
        //     else if (isClient(username, password)){

        // }
        //     else {

        //     }
        })

    }
    return (
        <div>
            <LoginPage onLogin={handleLogin} />
        </div>
    );
};

export default Login;