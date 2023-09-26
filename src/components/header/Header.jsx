import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { logo } from "../../assets";

const Header = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <header className="py-4 text-white bg-bgBlack">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {isAuthenticated ? (
            <NavLink className="nav-link" to="/my-blogs">
              My blogs
            </NavLink>
          ) : (
            <NavLink to="/">
              <img src={logo} alt="" />
            </NavLink>
          )}
          <div className="flex items-center gap-6">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/category">
              Category
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/blogs">
              Blogs
            </NavLink>
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
            <div className="ml-14">
              {isAuthenticated ? (
                <button className="nav-btn">
                  <NavLink className="nav-link" to="/account">
                    Account
                  </NavLink>
                </button>
              ) : (
                <button className="nav-btn">
                  <NavLink className="nav-link" to="/login">
                    Login
                  </NavLink>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
