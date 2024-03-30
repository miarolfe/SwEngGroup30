import Head from "next/head";
import '../globals.css'
import UserType from "../../components/UserAuthentication/UserType";

const UserPage = () => {
  return (
    <div>
      <Head>
        <title >
          Login/Register
        </title>
      </Head>
      <div className="main-bg">
        <section className="text-center">
          <UserType />
        </section>
      </div>
    </div>

  );
}
export default UserPage;