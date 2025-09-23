import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const { userName } = useContext(UserContext);
  return (
    <div className="flex justify-between items-center ">
      <div className="w-28">
        <Link to="/">
          <img src={LOGO_URL} alt="app logo" />{" "}
        </Link>
      </div>
      <div className="">
        <ul className="flex justify-items-center  ">
          <li className="mx-2 hover:font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2 hover:font-bold">
            <Link to="/about">About</Link>
          </li>
          <li className="mx-2 hover:font-bold">
            <Link to="/contact">Contact</Link>
          </li>

          <li className="mx-2 hover:font-bold">Cart</li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="mx-2 hover:font-bold text-yellow-600">{userName}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
