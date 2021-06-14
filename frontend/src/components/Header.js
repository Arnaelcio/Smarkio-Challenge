import React from "react";
import { Link } from "react-router-dom";
import "./css/Header.css";
import logo from "../images/logo-branca.png";

function Header() {
  return (
    <div className="header-section">
      <Link to="/">
        <img src={logo} alt="logo-section-header" />
      </Link>
      <ul>
        <div>
          <li>
            <Link to="/">HOME</Link>
          </li>
        </div>
        <div>
          <li>
            <a
              href="https://www.smarkio.com.br/quem-somos/"
              target="_blank"
              rel="noreferrer"
            >
              QUEM SOMOS
            </a>
          </li>
        </div>
        <div>
          <li>
            <a
              href="https://www.smarkio.com.br/servicos/"
              target="_blank"
              rel="noreferrer"
            >
              SERVIÇOS
            </a>
          </li>
        </div>
        <div>
          <li>
            <a
              href="https://www.smarkio.com.br/clientes/"
              target="_blank"
              rel="noreferrer"
            >
              CLIENTES
            </a>
          </li>
        </div>
        <div>
          <li>
            <a
              href="https://www.smarkio.com.br/implantacao/"
              target="_blank"
              rel="noreferrer"
            >
              IMPLANTAÇÃO
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}

export default Header;
