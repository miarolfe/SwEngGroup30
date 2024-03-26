import Head from "next/head";
import Header from "../components/Header";
import '../app/globals.css'
import Footer from "../components/Footer";

const LifeInsurance = () => {

    return (
        <div className="main-bg min-h-screen h-full">
            <Head>
                <title>
                    Life Insurance
                </title>
            </Head>
            <Header />
            <main>
                <section className="text-center">
                    <br/>
                    <br/>
                    <h2 className="text-4xl">
                        Life Insurance
                    </h2>
                    <p>
                        leads to questionaire page maybe
                    </p>
                </section>
            </main>
            <Footer/>
        </div>
    );
}
export default LifeInsurance;