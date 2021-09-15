import React, { useEffect, useState } from "react";

function Footer() {
  const [showOptions, setShowOptions] = useState(true);

  const showFooter = () => {
    if (window.innerWidth > 1026) {
      setShowOptions(true);
    } else {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", showFooter);
    return () => window.removeEventListener("resize", showFooter);
  }, []);

  return (
    <>
      {showOptions && (
        <div className="max-w-screen-lg mx-auto flex flex-col lg:flex-row lg:justify-around lg:pb-10 ">
          <div className="lg:space-y-4">
            <h1 className="uppercase text-xl font-serif font-bold">Products</h1>
            <div className=" space-y-2">
              <p className="footer">Shoes</p>
              <p className="footer">Clothing</p>
              <p className="footer">Accesories</p>
              <p className="footer">Gift Cards</p>
            </div>
            <div className=" space-y-2">
              <p className="footer">New Arrivals</p>
              <p className="footer">Best Sellers</p>
              <p className="footer">Release Dates</p>
              <p className="footer">Sale</p>
            </div>
          </div>
          <div className="lg:space-y-4">
            <h1 className="uppercase text-xl font-serif font-bold">Sports</h1>
            <div className=" space-y-2">
              <p className="footer">Soccer</p>
              <p className="footer">Running</p>
              <p className="footer">Basketball</p>
              <p className="footer">Football</p>
              <p className="footer">Golf</p>
              <p className="footer">Baseball</p>
              <p className="footer">Tennis</p>
              <p className="footer">Skateboarding</p>
              <p className="footer">Training</p>
            </div>
          </div>
          <div className="lg:space-y-4">
            <h1 className="uppercase text-xl font-serif font-bold">
              Collections
            </h1>
            <div className=" space-y-2">
              <p className="footer">NMD</p>
              <p className="footer">Superstar</p>
              <p className="footer">Ultraboost</p>
              <p className="footer">Believe This Tight</p>

              <p className="footer">adicolor</p>
              <p className="footer">Nite Jogger</p>
              <p className="footer">Stan Smith</p>
              <p className="footer">EQT</p>
              <p className="footer">Gazelle</p>
            </div>
          </div>
          <div className="lg:space-y-4">
            <h1 className="uppercase text-xl font-serif font-bold">Support</h1>
            <div className=" space-y-2">
              <p className="footer">Help</p>
              <p className="footer">Returns & Exchanges</p>
              <p className="footer">Shipping</p>
              <p className="footer">Order Tracker</p>

              <p className="footer">Store Locator</p>
              <p className="footer">Size Charts</p>
              <p className="footer">Gift Card Balance</p>
              <p className="footer">How to Clean</p>
              <p className="footer">Bra Fit Guide</p>
              <p className="footer">Running Shoe Finder</p>
              <p className="footer">Promotions</p>
            </div>
          </div>
          <div className="lg:space-y-4">
            <h1 className="uppercase text-xl font-serif font-bold">
              Company Info
            </h1>
            <div className=" space-y-2">
              <p className="footer">About Us</p>
              <p className="footer">Students</p>
              <p className="footer">adidas Stories</p>
              <p className="footer">adidas Apps</p>

              <p className="footer">Sustainability</p>
              <p className="footer">Creators Club</p>
              <p className="footer">Affiliates</p>
              <p className="footer">Press</p>
              <p className="footer">Careers</p>
              <p className="footer">California Transparency in</p>
              <p className="footer">Supply Chains Act</p>
            </div>
          </div>
        </div>
      )}
      {!showOptions && (
        <div className="flex items-center justify-evenly p-5 bg-black -mt-6">
          <div className="flex flex-col items-center space-y-2">
            <p className="resizedLinks">Help</p>
            <p className="resizedLinks">Returns & Exchanges</p>
            <p className="resizedLinks">Order Tracker</p>
            <p className="resizedLinks">Shipping</p>
            <p className="resizedLinks">Promotions</p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <p className="resizedLinks">Creators Club</p>
            <p className="resizedLinks">Store Finder</p>
            <p className="resizedLinks">Gift Cards</p>
            <p className="resizedLinks">adidas Apps</p>
            <p className="resizedLinks">Size Charts</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
