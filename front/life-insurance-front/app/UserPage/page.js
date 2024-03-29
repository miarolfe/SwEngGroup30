import Head from "next/head";
import '../globals.css'
import UserType from "../../components/UserAuthentication/UserType";
import Layout from "../../components/Layout";

const UserPage = () => {

  return (
    <Layout>
      <Head>
        <title >
          Login/Register
        </title>
      </Head>
      <div className="main-bg">
        <section className="text-center">
          <br />
          <br />
          <h2 className="text-4xl">
            Login/Register
          </h2>
          <br />
          <UserType />
        </section>
      </div>
    </Layout>

  );
}
export default UserPage;