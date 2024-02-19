import Head from "next/head";
import Header from "../components/Header";

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
            <section style={{ textAlign: 'center' }}>
                        <h2>Who We Are</h2>
                        <p>Description of the tab</p>
                </section>
            </main>
        </div>
    );
}
export default WhoWeAre;