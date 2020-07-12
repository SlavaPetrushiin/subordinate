import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <i className="fa fa-desktop" aria-hidden="true"></i>
            </div>
            <nav className="header-nav">
                <Link className="nav-item" to={"#"}>Планирование численности</Link>
                <span>/</span>
                <Link className="nav-item" to={"#"}>Мастер 2020</Link>
                <span>/</span>
                <Link className="nav-item" to={"#"}>Таблица</Link>
                <span>/</span>
                <Link className="nav-item" to={"#"}>Организационный дизайн</Link>
                <span>/</span>
                <Link className="nav-item" to={"#"}>Позиция</Link>
                <span>/</span>
                <Link className="nav-item" to={"#"}>Мои прямые подчиненные</Link>
            </nav>
        </div>
    );
};

export default Header;