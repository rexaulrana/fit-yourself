import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";
import user1 from "../../assets/images/user1.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import swal from "sweetalert";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  // logout
  const handleSignOut = () => {
    logOut()
      .then(() => {
        swal("success", "Logout successful", "success");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const nav = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/cart"}>Favorites</NavLink>
      </li>
      <li>
        <NavLink to={"/profile"}>Profile</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar  py-5 px-3">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {nav}
          </ul>
        </div>
        <img className="w-20 h-20 rounded-full" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex-col items-center ">
          <div className="flex justify-center items-center">
            <h1>
              {user?.photoURL && (
                <img
                  className="w-[50px] mr-3 rounded-full"
                  src={user.photoURL}
                  alt=""
                />
              )}
            </h1>
            <h2>
              {" "}
              {user?.photoURL == "null" && (
                <img
                  className="w-[50px] mr-3 rounded-full"
                  src={user1}
                  alt=""
                />
              )}
            </h2>
          </div>
          <div>
            <h2 className="text-center text-lg font-medium mr-3">
              {user && user.displayName}
            </h2>
          </div>
        </div>
        <div>
          <div>
            {user ? (
              <Link to={"/signUp"}>
                <button
                  onClick={handleSignOut}
                  className="btn btn-outline btn-secondary"
                >
                  LogOut
                </button>
              </Link>
            ) : (
              <Link to={"/signUp"}>
                <button className="btn btn-outline btn-secondary">
                  SignUp
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
