import Head from "next/head";
import Header from "../components/Header";

const TheTeam = () => {

    return (
        <div>
            <Head>
                <title>
                    The Team
                </title>
            </Head>
            <Header />
            <main>
                <section>
                    <h2>
                        The Team
                    </h2>
                    <p>
                        description of the tab
                    </p>
                </section>
            </main>
        </div>
    );
}
export default TheTeam;