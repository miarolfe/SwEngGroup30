import Head from 'next/head';
import Header from '../components/Header';
import Footer from "../components/Footer";

const Index = () => {
    return (
        <div className="font-monospace min-h-screen w-full main-bg">
            <Head>
                <title>
                    Munich Re Automation Solution Ltd
                </title>
            </Head>

            <Header/>
            <Footer/>

        </div>
    );


};

export default Index;