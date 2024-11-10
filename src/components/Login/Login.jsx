import React from 'react';
import { Link } from 'react-router-dom';

import backPhoto from './backPhoto/backPhoto.jpg';
import styles from './Login.css';
import Logo from './Logo/Ресурс 2.png';
import PawIcon from './Paw/paw.png';

const Login = () => {
    return (
        <div className={styles.loginContainer}>
            <img src={backPhoto} alt="backPhoto" className={styles.backPhoto} />

            <h1 className={styles.logo}>
                <img src={Logo} alt="PetMed Logo" className={styles.logoImage} />
                PET MED
            </h1>

            <form className={styles.form}>
                <input type="email" placeholder="Email" className={styles.input} />
                <input type="password" placeholder="Password" className={styles.input} />

                <Link to="/UserPage" className={styles.submitButton}>
                    <img src={PawIcon} alt="Paw Icon" className={styles.pawIcon} />
                </Link>
                <Link to="/register" className={styles.linkRegister}>
                    <h4>Registration</h4>
                </Link>
            </form>
        </div>
    );
};

export default Login;
