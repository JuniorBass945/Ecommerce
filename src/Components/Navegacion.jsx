import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FaDollyFlatbed } from '@fortawesome/free-solid-svg-icons';
export default function Navegacion() {
  return (
    <div>
      <header>
        <nav>
          <div className="Logo">
          <ul>
            <li>
              <NavLink to={'/'}><h2>Logo</h2></NavLink>
            </li>
          </ul>
          </div>

          <div className="botones">
            <ul>
              <li>
                <NavLink to ='/'>Home</NavLink>
              </li>
              <li>
                <NavLink to='Others'>Others</NavLink>
              </li>
              <li>
                <NavLink to='About'>About</NavLink>
              </li>
              <li>
                <NavLink to='Cart'><FontAwesomeIcon icon={faCartShopping } /></NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}
