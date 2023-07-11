import { useState, useEffect } from "react";
import facebook from "../src/assets/facebook.png";
import twitter from "../src/assets/twitter.png";
import whatsapp from "../src/assets/whatsapp.png";
import { Helmet } from "react-helmet";

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

function RandomImageDisplay() {
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = () => {
    fetch("https://picsum.photos/600/400")
      .then((response) => setImageUrl(response.url))
      .catch((error) => console.error("Error fetching random image:", error))
      .finally(() => setIsLoading(false));
  };

  const shareUrl = window.location.href;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Helmet>
        <meta property="og:image" content={imageUrl} />
        <meta property="og:title" content="Random Image Display" />
        <meta
          property="og:description"
          content="Displaying a random image each time the page is refreshed."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Random Image Display" />
        <meta
          name="twitter:description"
          content="Displaying a random image each time the page is refreshed."
        />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>
      <h1 className="text-3xl font-bold mb-8">Random Image Display</h1>
      {isLoading ? (
        <div className="flex items-center justify-center w-32 h-32">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <img className="mb-8 rounded-lg" src={imageUrl} alt="Random" />
      )}
      <div className="flex items-center justify-center gap-4">
        <FacebookShareButton
          url={shareUrl}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          <img
            src={facebook}
            alt="facebook"
            className="hover:scale-110"
            style={{ width: "50px", height: "50px" }}
          />
        </FacebookShareButton>
        <TwitterShareButton
          url={shareUrl}
          className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          <img
            src={twitter}
            alt="twitter"
            className="hover:scale-110"
            style={{ width: "50px", height: "50px" }}
          />
        </TwitterShareButton>
        <WhatsappShareButton
          url={shareUrl}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          <img
            src={whatsapp}
            alt="whatsapp"
            className="hover:scale-110"
            style={{ width: "50px", height: "50px" }}
          />
        </WhatsappShareButton>
      </div>
    </div>
  );
}

export default RandomImageDisplay;
