import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-4 mx-4 border-b-2">
        <p className="bg-amber-600 text-amber-300 text-7xl">KnowCafe</p>
        <img src="/images/profile.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
