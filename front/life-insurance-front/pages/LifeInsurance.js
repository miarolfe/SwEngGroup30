import Head from "next/head";
import Header from "../components/Header";
import '../app/globals.css'

const LifeInsurance = () => {

    return (
        <div>
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
        </div>
    );
}
export default LifeInsurance;