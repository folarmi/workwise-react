import { useState } from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const toggleDropdown = () => {
    setShowDropDown(!showDropDown);
  };

  return (
    <div>
      <p
        className="nav-links font-verybold font-semibold mr-8 cursor-pointer"
        onClick={toggleDropdown}
      >
        Products
      </p>
      {showDropDown ? (
        <div className="mt-2 absolute w-44 bg-white shadow-lg rounded-lg p-4">
          <ul className="">
            <li className="nav-links text-lightBlack text-base font-verybold font-semibold mb-4">
              Workwise
            </li>
            <Link to="visitor-management">
              <li className="nav-links text-lightBlack font-verybold font-semibold mb-4">
                Visitor management
              </li>
            </Link>
            <Link to="/meeting-room">
              <li className="nav-links text-lightBlack font-verybold font-semibold mb-4">
                Meeting Rooms
              </li>
            </Link>
            <li className="nav-links text-lightBlack font-verybold font-semibold">
              Employee clock-in
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export { Dropdown };