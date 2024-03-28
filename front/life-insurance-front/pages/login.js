import LoginClient from './Login/loginClient';
import Footer from "../components/Footer";



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
            <LoginClient onLogin={handleLogin} />
        </div>
    );
};

export default Login;