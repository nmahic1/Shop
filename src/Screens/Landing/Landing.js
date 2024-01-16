import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import Store from "../../Components/Store/Store";

function Landing() {
  const [showStores, setShowStores] = useState(false);

  const handleStoreClick = () => {
    setShowStores(!showStores);
  };

  return (
    <div className="landing-wrapper">
      <p className="welcome">Welcome!</p>
      <Button onClick={handleStoreClick}>Our Stores</Button>
      <div className="stores">
        {showStores && (
          <div className="name">
            <Store name="M.A.S. SHOP doo PJ ČOBANIJA" />
            <Store name="M.A.S. SHOP doo PJ DELIKATESA" />
          </div>
        )}
      </div>
      <div className="aboutUs">
        About Us <p className="text">Tekst</p>
      </div>
    </div>
  );
}

export default Landing;
