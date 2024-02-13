// import Navbar from "../components/Navbar/Navbar";

import SingleLineTextBox from "@/components/SingleLineTextBox";

const Login = () => {
  return (
    <div className="flex flex-row justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center bg-white h-4/5 w-2/5 rounded-md shadow-md p">
        <span className="w-full px-2">
          <p className="font-bold text-5xl">Sign In</p>
        </span>

        {/* Email text box */}
        <SingleLineTextBox
          label="Email address"
          placeholder="example@email.com"
          type="email"
        />

        {/* Password text box */}
        <SingleLineTextBox
          label="Password"
          placeholder="Password"
          type="password"
        />
      </div>
    </div>
  );
};

export default Login;
