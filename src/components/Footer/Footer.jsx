import React from 'react';

import styles from './Footer.css';
import Logo from './Logo/Ресурс 2.png';

const FooterComponent = () => {
    return (
        <div className={styles.containerFooter}>
            <div className={styles.logo}>
                <img src={Logo} alt="PetMed Logo" className={styles.logo} />
                <h2>PET MED</h2>
            </div>
            <div className="contact-info">
                <h3>Контакти:</h3>
                <p>Моб. тел.: (066) 248-36-31</p>
                <p>моб. тел.: (067) 462-09-06</p>
            </div>
            <div className="address">
                <h3>Адреса:</h3>
                <p>м. Ужгород</p>
                <p>вул. Заньковецька 89</p>
            </div>
            <div className="working-hours">
                <h3>Ми відкриті:</h3>
                <p>Пн-Сб - 7:00-20:00</p>
                <p>Нд - Вихідний</p>
                <p>Виклики швидкої бригади цілодобові</p>
            </div>
        </div>
    );
};

export default FooterComponent;
