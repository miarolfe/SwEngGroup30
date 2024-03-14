import Head from "next/head";
import Header from "../components/Header";
import '../app/globals.css'
import UserType from "../components/UserAuthentication/UserType";

const UserPage = () => {

    return (
        <div>
            <Head>
                <title>
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
                    <p>
                        leads to login page for client or employee
                    </p>
                    <UserType />
                </section>
            </main>
        </div>
    );
}
export default UserPage;