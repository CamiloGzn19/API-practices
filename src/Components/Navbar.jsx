import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  let navigate = useNavigate();

  const nav = (pa) => {
    navigate(pa);
  };

  return (
    <>
      <div className="general-nav">
        <ul>
          <li>
            <a onClick={() => nav("/movies")}>API Movies</a>
          </li>
          <li>
            <a onClick={() => nav("/rick")}>API Rick and Morty</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
