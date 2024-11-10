import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';
import Logo from './Logo/Ресурс 2.png';

const Header = () => (
    <header className={styles.container}>
        <div className={styles.topBar}>
            <img src={Logo} alt="Логотип Pet Med" className={styles.logo} />
            <h1>Pet Med</h1>
            <nav className={styles.navigation}>
                <Link to="/">Головна</Link>
                <Link to="/information">Про нас</Link>
                <Link to="/Login">Увійти</Link>
            </nav>
        </div>
    </header>
);

export default Header;
