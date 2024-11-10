import React from 'react';

import RegisterBackPhoto from './backPhoto/backPhoto.jpg';
import RegisterLogo from './Logo/Ресурс 2.png';
import RegisterPawIcon from './Paw/paw.png';
import styles from './Register.css';

const Register = () => {
    return (
        <div className={styles.registerContainer}>
            <img src={RegisterBackPhoto} alt="backPhoto" className={styles.registerBackPhoto} />

            <h1 className={styles.registerLogo}>
                <img src={RegisterLogo} alt="PetMed Logo" className={styles.registerLogoImage} />
                PET MED
            </h1>

            <form className={styles.registerForm}>
                <input type="text" placeholder="Name" className={styles.registerInput} />
                <input type="email" placeholder="Email" className={styles.registerInput} />
                <input type="password" placeholder="Password" className={styles.registerInput} />

                <button type="submit" className={styles.registerSubmitButton}>
                    <img src={RegisterPawIcon} alt="Paw Icon" className={styles.registerPawIcon} />
                </button>
            </form>
        </div>
    );
};

export default Register;
