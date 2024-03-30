
import '../app/globals.css'
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const UserNavPage = () => {
  const [showSocialMediaForm, setShowSocialMediaForm] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [username, setUsername] = useState('');
  const [response, setResponse] = useState('');
  const handleSocialMediaClick = (media) => {
    setSelectedMedia(media);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/premium/${username}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        const data = await response.json();
        setResponse(JSON.stringify(data));
        // Handle success
      } else {
        // Handle error
        setResponse('request failed' + response.status);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setResponse('error' + error.message);
    }
  };


  return (
    <div>
      <main>
        <div class="main-bg min-h-screen p-8 rounded-lg shadow-md">

          <h2 class="text-center text-2xl font-bold text-gray-800 mb-4">Your medical records</h2>
          <div class="flex justify-center space-x-4">
            <Link href="/quote">
              <button class="focus:shadow-outline h-20 w-48 rounded-lg bg-indigo-700 text-xl text-white
                        transition-colors duration-150 hover:bg-indigo-800">
                Go to questionnaire</button>
            </Link>
            <button onClick={() => setShowSocialMediaForm(!showSocialMediaForm)} className="focus:
                        shadow-outline h-20 w-48 rounded-lg bg-purple-700 text-xl text-white transition-colors
                        duration-150 hover:bg-purple-800">
              Automated fill in
            </button>
          </div>
          {showSocialMediaForm && (
            <div className="mt-4">
              {!selectedMedia ? (
                <div className="flex justify-center space-x-4">
                  <button onClick={() => handleSocialMediaClick('facebook')}>
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                  </button>
                  <button onClick={() => handleSocialMediaClick('instagram')}>
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                  </button>
                  <button onClick={() => handleSocialMediaClick('twitter')}>
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                  <button type="submit">Submit</button>
                </form>
              )}
            </div>
          )}
          {response && (
            <div className="mt-4">
              <p>Response from server:</p>
              <div className="p-4 bg-gray-200 rounded">{response}</div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
export default UserNavPage;