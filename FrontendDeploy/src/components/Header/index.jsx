import React from "react";
import {Link} from "react-router-dom";
import logo from './../../assets/images/logo-senai.png';

export const Header = () => {
    
    return(
        <nav>
            <img src={logo} alt="Logo Senai" />
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/equipamentos">Equipamentos</Link>
                </li>
                <li>
                    <button>Sair</button>
                </li>
            </ul>
        </nav>
    )
}

export default Header;