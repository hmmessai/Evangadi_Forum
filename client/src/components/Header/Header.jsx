import React, { useContext } from "react";
import logo from "../../assets/evangadi-logo-home.png";
import "./Header.css";
import { AuthContext } from "../Authv1/AuthContext";

function Header() {
  const { logout, state } = useContext(AuthContext);

  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <a className="navbar-brand" href="/home">
            <img src={logo} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end fw-semibold"
            id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className="nav-link active align-items-center d-flex"
                aria-current="page"
                href="#">
                Home
              </a>
              <a className="nav-link align-items-center d-flex" href="#">
                How It Works
              </a>
              <a className="nav-link" href="/home">
                {state.isAuthenticated ? (
                  <button onClick={() => logout()} className="action-btn">
                    SIGN OUT
                  </button>
                ) : (
                  <button className="action-btn">SIGN IN</button>
                )}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
