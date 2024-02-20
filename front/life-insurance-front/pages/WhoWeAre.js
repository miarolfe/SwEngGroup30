import Head from "next/head";
import Header from "../components/Header";
import '../app/globals.css'

const WhoWeAre = () => {

    return (
        <div>
            <Head>
                <title>
                    Who We Are
                </title>
            </Head>
            <Header />
            <main>
            <section className="text-center">
                <br/>
                <br/>
                <h2 className="text-4xl">Who We Are</h2>
                <p>description of tab   </p>
                </section>
            </main>
        </div>
    );
}
export default WhoWeAre;