import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";
import avatar from "../assets/images/avater.png";
import UserProfileDropdown from "../Components/Auth/UserProfileDropdown";

function Nav() {
  const { user, login, logout } = useUser();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="font-inria">
      <header className="pt-2">
        <nav className="flex justify-around w-full items-center flex-row">
          <Link to="/" className="text-3xl">
            FIELDMATE
          </Link>
          <div className="flex gap-28">
            <ul className="flex justify-center items-center gap-8">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/equipment-catalogue">Equipment Catalogue</Link>
              </li>
              <li>
                <Link to="/rewiew">Review</Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center gap-2 relative">
            {user ? (
              <div
                className="flex items-center gap-2"
                onMouseEnter={handleDropdownToggle}
                onMouseLeave={handleDropdownToggle}
              >
                <span>Welcome back!</span>
                <span>{user.username}</span>
                <img
                  src={avatar}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
                {isDropdownOpen && <UserProfileDropdown />}
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="bg-default-green text-white w-24 h-10 justify-center items-center flex rounded-lg"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="border border-solid border-white w-24 h-10 justify-center items-center flex rounded-lg"
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
