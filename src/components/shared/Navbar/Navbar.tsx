import LogoHome from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import Button from "../../UI/Button/Button";
// import LogoHome from "../../icons/whooshLogo.svg";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="py-5">
      <div className="flex items-center justify-between wrapper">
        <img src={LogoHome} alt="" className="w-28s" />

        <ul className="flex items-center justify-between space-x-6">
          <li>
            <Link to="/">Individual</Link>
          </li>

          <li>
            <Link to="/">Business</Link>
          </li>

          <li>
            <Link to="/">Pricing</Link>
          </li>

          <li>
            <Link to="/">Set Your Payroll</Link>
          </li>

        </ul>
        <div className="flex items-center space-x-4">
          <button
            className="px-10 py-3 bg-primary rounded-full text-white"
          >
            Sign Up
          </button>

          <button
            className="px-10 py-3 bg-primary rounded-full text-white"
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
