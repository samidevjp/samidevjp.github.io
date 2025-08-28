import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="absolute top-0 w-full left-0 py-6 px-8 md:px-16 flex justify-between items-center">
      <p className="text-2xl md:text-3xl">Asami Okamoto</p>
      <nav className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/wabi-v2">Wabi V2</Link>
        <Link to="/wabi-v1">Wabi V1</Link>
      </nav>
    </div>
  );
};

export default Header;
