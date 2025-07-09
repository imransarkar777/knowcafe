import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 border-b-2 lg:max-w-10/12  md:max-w-7xl mx-auto">
      <p className="bg-amber-600 text-amber-300 text-7xl">KnowCafe</p>
      <img src="/images/profile.png" alt="" />
    </header>
  );
};

export default Header;
