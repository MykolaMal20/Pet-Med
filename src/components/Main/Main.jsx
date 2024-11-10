import React from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CatImage from './CatTed/CatTed.png';
import DogBobi from './DogBobi/DogBobi.png';
import styles from './Main.css';
import teamPhoto1 from './Personal/photo1.jpg';
import teamPhoto2 from './Personal/photo2.jpg';
import teamPhoto3 from './Personal/photo3.jpg';
import teamPhoto4 from './Personal/photo4.jpg';
import teamPhoto5 from './Personal/photo5.jpg';

const services = [
    {
        id: 1,
        title: 'Рентгенографія',
        description: 'Цифрові фото високої якості за допомогою сучасного рентген-апарата.',
    },
    { id: 2, title: 'УЗД', description: 'Візуальна оцінка внутрішніх органів з використанням ультразвукових хвиль.' },
    {
        id: 3,
        title: 'Офтальмологія',
        description: 'Візуальний огляд ока, навколишніх тканин та проведення діагностичних тестів.',
    },
    {
        id: 4,
        title: 'Аналізи',
        description: 'Сучасні лабораторні дослідження з використанням передових систем та технологій.',
    },
    {
        id: 5,
        title: 'Терапія',
        description: 'Діагностика і лікування внутрішніх органів, не вдаючись до хірургічного втручання.',
    },
    { id: 6, title: 'Стаціонар', description: 'Сучасне відділення інтенсивної терапії, в якому утримуються тварини.' },
    { id: 7, title: 'Стерилізація', description: 'Безболісна та якісна стерилізація кішок та собак.' },
    { id: 8, title: 'Стоматологія', description: 'Ефективний спосіб запобігання захворюванням ротової порожнини.' },
];

const teamMembers = [
    { name: 'Кіш Ростислава Михайлівна', position: 'Терапевт', image: teamPhoto1 },
    { name: 'Шевченко Віталіна Миколаївна', position: 'Дерматолог', image: teamPhoto2 },
    { name: 'Туряниця Анастасія Олегівна', position: 'Ортопед', image: teamPhoto3 },
    { name: 'Іванчулинець Василь Васильович', position: 'Хірург', image: teamPhoto4 },
    { name: 'Мальованик Микола Святославович', position: 'Хірург', image: teamPhoto5 },
];

const MainComponent = () => {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <div className={styles.topBar2}>
                    <img src={CatImage} alt="Cat" className={styles.catImage} />
                    <div className={`${styles.textBlock} ${styles.text1}`}>
                        PetMed - Це ветеринарна клініка <br /> для ваших чотирилапих улюбленців.
                    </div>
                    <div className={`${styles.textBlock} ${styles.text2}`}>
                        Наші спеціалісти виконують <br /> процедури будь-якої складності.
                    </div>
                    <div className={`${styles.textBlock} ${styles.text3}`}>
                        Тільки тут, є можливість, спостерігати <br /> у режимі онлайн, кожну виконану <br />{' '}
                        маніпуляцію.
                    </div>
                    <div className={`${styles.textBlock} ${styles.text4}`}>
                        Наш колектив забезпечить <br /> найкраще цілодобове піклування.
                    </div>
                    <div className={`${styles.textBlock} ${styles.text5}`}>
                        Найновіше обладнання гарантує цілковите <br /> обстеження від кігтиків до вусиків.
                    </div>
                    <div className={`${styles.textBlock} ${styles.text6}`}>
                        Наша ветеринарна клініка здійснює <br /> виїзди на виклики.
                    </div>
                </div>
            </div>
            <div>
                <h2 className={styles.servicesText}>Доступні послуги:</h2>
            </div>
            <div className={styles.servicesContainer}>
                {services.map((service) => (
                    <div key={service.id} className={styles.serviceItem}>
                        <span className={styles.serviceNumber}>{service.id}.</span>
                        <div>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                            <p className={styles.serviceDescription}>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.dogBob}>
                <img src={DogBobi} alt="Dog" className={styles.dogBob} />
                <h2 className={styles.dogBobiText}>Ваша міра відповідальності — </h2>
                <h2 className={styles.dogBobiText2}>запорука цілісності здоров&apos;я тварин.</h2>
            </div>
            <div className={styles.teamContainer}>
                <h2 className={styles.teamTitle}>Наш колектив</h2>
                <div className={styles.teamGrid}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className={styles.teamMember}>
                            <img src={member.image} alt={member.name} className={styles.teamMemberImage} />
                            <div className={styles.teamMemberInfo}>
                                <p>{member.name}</p>
                                <p>{member.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MainComponent;
