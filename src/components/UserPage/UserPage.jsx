import React from 'react';

import CallTheDoctor from '../CallTheDoctor/CallTheDoctor';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import RegistrationForExamination from '../RegistrationForExamination/RegistrationForExamination';
import styles from './UserPage.css';

const PetInfo = () => {
    return (
        <div>
            <Header />
            <div className={styles.petCard}>
                <div className={styles.profilePicture}></div>
                <h2>Дані тварини</h2>

                <div className={styles.petDetails}>
                    <div className={styles.detailField}>
                        <span>Ім&apos;я тварини:</span> Мурзік
                    </div>
                    <div className={styles.detailField}>
                        <span>Дата народження:</span> 10.09.2020
                    </div>
                    <div className={styles.detailField}>
                        <span>Вид:</span> Кіт
                    </div>
                    <div className={styles.detailField}>
                        <span>Порода:</span> Британська
                    </div>
                    <div className={styles.detailField}>
                        <span>Стать:</span> Чоловіча
                    </div>
                    <div className={styles.detailField}>
                        <span>Окрас:</span> Сірий
                    </div>
                </div>
                <div className={styles.detailFieldCentr}>
                    <span>Дата реєстрації:</span> 04.05.2021
                </div>

                <h3>Процедури</h3>
                <div className={styles.procedures}>
                    <button>Стерилізація</button>
                    <button>Щеплення</button>
                </div>

                <h3>Ідентифікатори</h3>
                <div className={styles.identifiers}>
                    <div>WC1 573132519020</div>
                    <div>1874609736488072</div>
                </div>
            </div>

            <div className={styles.actions}>
                <RegistrationForExamination />
                <CallTheDoctor />
            </div>
            <Footer />
        </div>
    );
};

export default PetInfo;
