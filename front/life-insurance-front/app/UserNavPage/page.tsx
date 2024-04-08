"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  getFacebookLoginStatus,
  initFacebookSdk,
  fbLogin,
  fbLogout,
  fbUser,
} from "@/utils/FacebookSDK";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Script from "next/script";

const UserNavPage = () => {
  const [showSocialMediaForm, setShowSocialMediaForm] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [username, setUsername] = useState("");
  const [response, setResponse] = useState("");

  const router = useRouter();
  const handleSocialMediaClick = (media) => {
    setSelectedMedia(media);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/premium/${username}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setResponse(JSON.stringify(data));
        // Handle success
      } else {
        // Handle error
        setResponse("request failed" + response.status);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResponse("error" + error.message);
    }
  };

  useEffect(() => {
    console.log("Started use effect");
    initFacebookSdk().then(() => {
      getFacebookLoginStatus().then((response) => {
        if (response == null) {
          console.log("No login status for the person");
        } else {
          console.log(response);
        }
      });
    });
  }, []);

  async function login() {
    // fbLogout().then((response) => {
    //   console.log(response);
    //   // @ts-ignore
    //   if (response.status === "connected") {
    //     // @ts-ignore
    //     localStorage.setItem("fbToken", response.authResponse.accessToken);
    //     console.log("Person is logged out");
    //   } else {
    //     // something
    //   }
    // });

    const res = await getFacebookLoginStatus();

    if (res !== null) {
      fbLogin().then((response) => {
        console.log(response);
        // @ts-ignore
        if (response.status === "connected") {
          // @ts-ignore
          localStorage.setItem("fbToken", response.authResponse.accessToken);
          // @ts-ignore
          localStorage.setItem("fbUser", response.authResponse.userID);
          fbUser();
          console.log("Person is connected");
        } else {
          // something
        }
      });
      fbUser();
    }

    router.push("/quote");
  }

  return (
    <>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        async
        defer
        crossOrigin="anonymous"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <div className="flex flex-col p-2 h-full">
        <h1 className="text-white text-6xl font-semibold mb-2">Hello, User!</h1>
        <div className="glass w-full h-fit rounded-md p-2">
          <h2 className="text-white text-3xl font-semibold w-full text-center">
            You don't have any quotes
          </h2>
          <div className="h-36 w-full flex">
            <div className="w-1/2 rounded-md m-2">
              <a
                className="transition-colors flex h-full w-full rounded-md bg-violet-700 items-center justify-center text-white hover:bg-violet-600"
                href="/quote"
              >
                Manual Application
              </a>
            </div>
            <div className="flex flex-col justify-between w-1/2 m-2">
              <button
                onClick={login}
                className="w-full h-1/4 rounded-md bg-[#4267B2] text-white"
              >
                Fill in with Facebook
                <FontAwesomeIcon icon={faFacebook} className="ml-2" />
              </button>
              <button className="w-full h-1/4 rounded-md bg-[#C13584] text-white">
                Fill in with Instagram
                <FontAwesomeIcon icon={faInstagram} className="ml-2" />
              </button>
              <button className="w-full h-1/4 rounded-md bg-black text-white">
                Fill in with X
                <FontAwesomeIcon icon={faXTwitter} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserNavPage;