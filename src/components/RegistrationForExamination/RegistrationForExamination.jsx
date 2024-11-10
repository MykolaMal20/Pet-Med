import React, { useState } from 'react';

import styles from './RegistrationForExamination.css';

function RegistrationForExamination() {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="RegistrationForExamination">
            <button className={styles.openButton} onClick={togglePopup}>
                Записатись на консультацію
            </button>

            {isOpen && (
                <div className={styles.overlay} onClick={togglePopup}>
                    <div className={styles.popup} onClick={(event) => event.stopPropagation()}>
                        <h2 className={styles.titleh2}>Запис на консультацію</h2>
                        <form>
                            <label>Номер телефону</label>
                            <input type="tel" placeholder="Введіть номер" required className={styles.inputField} />
                            <label>Ім&apos;я</label>
                            <input type="text" placeholder="Введіть ім'я" required className={styles.inputField} />
                            <label>Прізвище</label>
                            <input type="text" placeholder="Введіть прізвище" required className={styles.inputField} />
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

export default RegistrationForExamination;
