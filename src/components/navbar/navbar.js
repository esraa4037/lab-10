import React from "react";
import NavLink from "../link/NavLink";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../store/Actions";
function Navbar() {
  const dispatch = useDispatch();
  let [navElements, setNavElements] = useState([
    { content: "Home", data: "/home" },
    { content: "All Products", data: "/allProducts" },
    { content: "Electronics", data: "/electronics" },
    { content: "Favourites", data: "/favourites" },
  ]);
  let lang = useSelector((state) => state.lang);

  let toggleLanguage = () => {
    dispatch(changeLanguage(lang == "en-US" ? "ar-SA" : "en-US"));
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="/home">
              Hidden brand
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navElements.map((element) => (
                <NavLink
                  className={["nav-item", "nav-link"]}
                  content={element.content}
                  data={element.data}
                />
              ))}
              <button className="btn btn-primary" onClick={toggleLanguage}>
                {lang}
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
