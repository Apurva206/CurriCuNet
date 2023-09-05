import React from 'react'
import { useState } from 'react';
import CookieConsent from "react-cookie-consent";

 function CookieBanner() {
    const[showBanner, setShowBanner] = useState(true);

    const acceptCookies = () => {
        setShowBanner(false);
    }

    const declineCookies = () => {
        setShowBanner(false);
    }

  return (
    <div>
        {showBanner &&(
        <div> 
            <CookieConsent
                location="top"
                buttonText="Accept"
                declineButtonText="Decline"
                cookieName="myAwesomeCookieName2"
                style={{ background: "#2B373B" }}
                declineButtonStyle={{ color: "#4e503b", fontSize: "13px" }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                expires={150}
                onAccept={acceptCookies}
                onDecline={declineCookies}
>
                This website uses cookies to enhance the user experience.
            </CookieConsent>
        </div>
        )}
      
    </div>
  )
}

export default CookieBanner;
