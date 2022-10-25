import React, { useContext } from "react";
import { FaCloudsmith } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const handleSignOut = () => {
    userSignOut()
      .then((result) => {
        console.log("Signing Out");
      })
      .catch((error) => {
        console.log("Signing Out Failed", error.message);
      });
  };
  // console.log(user.photoURL);
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          {/* RESPONSIVE BAR OPTION */}
          {/* <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 hidden"
            >
              <li>
                <p>Item 1</p>
              </li>
              <li>
                <p>Item 2</p>
              </li>
              <li>
                <p>Item 3</p>
              </li>
            </ul>
          </div> */}
          <p className="btn btn-ghost normal-case text-2xl justify-start">
            <Link className="flex items-center" to={"/"}>
              <FaCloudsmith />
              TECH HUB
            </Link>
          </p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <p className="font-light">
                <Link to={"/courses"}>COURSES</Link>
              </p>
            </li>

            <li>
              <p className="font-light">FAQ</p>
            </li>
            <li>
              <p className="font-light">BLOG</p>
            </li>
          </ul>
          <div>
            {user ? (
              <button className="btn btn-ghost normal-case text-xl">
                <img
                  className="h-6 w-6 rounded-lg items-center justify-center align-middle"
                  src={user.photoURL}
                ></img>
                {/* <FaUser></FaUser> */}
              </button>
            ) : (
              <button className="btn btn-ghost normal-case text-xl">
                <Link to={"/login"}>LOGIN</Link>
              </button>
            )}

            {user ? (
              <button className="btn btn-ghost normal-case text-xl">
                <Link onClick={handleSignOut}>SIGNOUT</Link>
              </button>
            ) : (
              <button className="btn btn-ghost normal-case text-xl">
                <Link to={"/signup"}>SIGNUP</Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
