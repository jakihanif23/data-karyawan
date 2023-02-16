import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="uk-navbar-container uk-padding-small" uk-navbar='mode: click' uk-sticky="start: #navbar-top">
        <div className="uk-navbar-left uk-margin-left">
          <ul className="uk-navbar-nav">
            <li className="uk-active">
              <Link to=''>Home</Link>
            </li>
            <li className="uk">
              <Link to='karyawan'>Karyawan</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;