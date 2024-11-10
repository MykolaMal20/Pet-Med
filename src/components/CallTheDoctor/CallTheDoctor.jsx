import React, { useState } from 'react';

import styles from './CallTheDoctor.css';

function CallTheDoctor() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="RegistrationForExamination">
            <button className={styles.openButton} onClick={togglePopup}>
                Виклик лікаря
            </button>

            {isOpen && (
                <div className={styles.overlay} onClick={togglePopup}>
                    <div className={styles.popup} onClick={(event) => event.stopPropagation()}>
                        <h2 className={styles.titleh2}>Виклик лікаря</h2>
                        <form>
                            <label>Номер телефону</label>
                            <input type="tel" placeholder="Введіть номер" required className={styles.inputField} />
                            <label>Ім&apos;я</label>
                            <input type="text" placeholder="Введіть ім'я" required className={styles.inputField} />
                            <label>Прізвище</label>
                            <input type="text" placeholder="Введіть прізвище" required className={styles.inputField} />
                            <label>Адреса</label>
                            <input type="text" placeholder="Введіть адресу" required className={styles.inputField} />
                            <button type="submit" className={styles.submitButton}>
                                Записатися
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CallTheDoctor;
