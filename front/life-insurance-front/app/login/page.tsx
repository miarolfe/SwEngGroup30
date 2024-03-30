import Head from "next/head";
import UserType from "../../components/UserAuthentication/UserType";

const UserPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>
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
