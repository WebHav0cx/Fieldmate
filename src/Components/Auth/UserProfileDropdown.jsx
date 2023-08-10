import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";

function UserProfileDropdown() {
  const user = {
    username: "Ayodeji Ojo",
  };
  const { logout } = useUser();
  return (
    <div>
      <div className="bg-white border rounded-lg shadow-lg absolute right-0 mt-7">
        <ul className="py-2">
          <li>
            <Link
              to="/profile"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/equipment-list"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Equipment List
            </Link>
          </li>
          <li>
            <button
              onClick={logout}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserProfileDropdown;
