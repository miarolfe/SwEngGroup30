"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  getFacebookLoginStatus,
  initFacebookSdk,
  fbLogin,
} from "@/utils/FacebookSDK";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Script from "next/script";

const UserNavPage = () => {
  const [showSocialMediaForm, setShowSocialMediaForm] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [username, setUsername] = useState("");
  const [response, setResponse] = useState("");
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

  function login() {
    console.log("reached log in button");
    fbLogin().then((response) => {
      console.log(response);
      // @ts-ignore
      if (response.status === "connected") {
        // @ts-ignore
        localStorage.setItem("fbToken", response.authResponse.accessToken);
        console.log("Person is connected");
      } else {
        // something
      }
    });
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
          <div className="h-32 w-full flex">
            <div className="w-1/2 rounded-md m-2">
              <a
                className="block h-full w-full rounded-md bg-blue-400 text-center mt-auto"
                href="/quote"
              >
                Manual Application
              </a>
            </div>
            <div className="w-1/2 m-2">
              <button className="w-full h-1/3 rounded-md bg-green-500">
                Placeholder
              </button>
              <button>Placeholder</button>
              <button>Placeholder</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserNavPage;
