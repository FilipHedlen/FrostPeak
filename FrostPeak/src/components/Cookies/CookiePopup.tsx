import { useState } from 'react';

const CookiePopup = () => {
  const [accepted, setAccepted] = useState<boolean>(localStorage.getItem("cookieAccepted") === "true");

  const acceptCookies = () => {
    localStorage.setItem("cookieAccepted", "true");
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="left-0 right-0 bg-gray-900 text-white p-4 flex justify-center">
      <p >This website uses cookies to ensure you get the best experience on our website.</p>
      <button
        className="my-2 mx-2 bg-blue hover:bg-darkblue text-white py-2 px-4 rounded"
        onClick={acceptCookies}
      >
        Accept
      </button>
    </div>
  );
};

export default CookiePopup;