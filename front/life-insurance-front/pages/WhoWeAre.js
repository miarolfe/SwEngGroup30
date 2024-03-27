import Head from "next/head";
import Header from "../components/Header";
import '../app/globals.css'
import Footer from "../components/Footer";

const WhoWeAre = () => {

    return (
        <div className="main-bg min-h-screen h-full">
            <Head>
                <title>
                    Who We Are
                </title>
            </Head>
            <Header />
            <br />
            <br />
            <section className="text-center">
                <h2 className="text-4xl">Who We Are</h2>
                <p>description of tab   </p>
            </section>
            <Footer />
        </div>
    );
}
export default WhoWeAre;