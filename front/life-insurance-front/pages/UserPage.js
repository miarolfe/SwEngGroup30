import Head from "next/head";
import Header from "../components/Header";
import '../app/globals.css'
import UserType from "../components/UserAuthentication/UserType";
import Footer from "../components/Footer";

const UserPage = () => {

    return (
        <div className="main-bg min-h-screen h-full">
            <Head>
                <title >
                    Login/Register
                </title>
            </Head>
            <Header />
            <main>
                <section className="text-center">
                    <br/>
                    <br/>
                    <h2 className="text-4xl">
                        Login/Register
                    </h2>
                    <br/>
                    <UserType />
                </section>
            </main>
            <Footer/>
        </div>
    );
}
export default UserPage;