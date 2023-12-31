import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const token = store.token;
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Home</span>
        </Link>
        <Link to="/private">
          <span className="navbar-brand mb-0 h1">Privado</span>
        </Link>
        <div className="ml-auto">
          <Link to="/register">
            <button className="btn btn-primary me-2">Registrarse</button>
          </Link>
          {token && token != "" && token != undefined ? (
            <button
              className="btn btn-primary"
              onClick={() => actions.logOut()}
            >
              Log out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn btn-primary">Aceder</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};
