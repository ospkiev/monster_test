import React from 'react';
import styles from './Footer.module.css';
import logo2 from '../img/footer/logo2.svg';
import product_icon from '../img/footer/product_icon.svg';
import themes_icon from '../img/footer/themes_icon.svg';
import company_icon from '../img/footer/company_icon.svg';
import support_icon from '../img/footer/support_icon.svg';
import email_icon from '../img/footer/email_icon.svg';
import email_input_icon from '../img/footer/email_input_icon.svg';
import fb_icon from '../img/footer/fb_icon.svg';
import google_icon from '../img/footer/google_icon.svg';
import pint_icon from '../img/footer/pint_icon.svg';
import twit_icon from '../img/footer/twit_icon.svg';

const Footer = () => {
    return (
        <div>

            <div className={styles.about}></div>
            <img src={logo2} className={styles.logo2} alt='img' />
            <p className={styles.text}>TemplateMonster — це маркетплейс, на якому можна придбати все необхідне для створення сайту.
                Сотні незалежних розробників продають свої продукти в нас щоб ви могли створити свій унікальний проект.
            </p>

            <ul>
                <li className={styles.first_li}>5,000,000</li>
                <li className={styles.second_li}>1,640</li>
                <li className={styles.third_li}>21,416</li>
            </ul>

            <div className={styles.links_wrapper}></div>
            <div>
                <img src={product_icon} className={styles.product_icon} alt='img' />
                <ul className={styles.product_ul}>Продукти
                    <li>Wordpress шаблони</li>
                    <li>HTML шаблони</li>
                    <li>OpenCart шаблони</li>
                    <li>Joomla шаблони</li>
                    <li>PrestaShop шаблони</li>
                    <li>WooCommerce шаблони</li>
                    <li>Конструктор сайтів</li>
                    <li>Magento шаблони</li>
                </ul>
            </div>

            <div>
                <img src={themes_icon} className={styles.themes_icon} alt='img' />
                <ul className={styles.themes_ul} >Тематики
                    <li>Сайти-візитки</li>
                    <li>Мода та краса</li>
                    <li>Сім’я</li>
                    <li>Дизайн і фото</li>
                    <li>Нерухомість</li>
                    <li>Авто і мото</li>
                    <li>Медицина</li>
                    <li>Подорожі та спорт</li>
                </ul>
            </div>

            <div>
                <img src={company_icon} className={styles.company_icon} alt='img' />
                <ul className={styles.company_ul}>Компанія
                    <li>Про компанію</li>
                    <li>Каталог веб-студій</li>
                    <li>Блог</li>
                    <li>Партнерська програма</li>
                    <li>Зв’язатися з нами</li>
                    <li>Політика конфеденційності</li>
                    <li>Правила повернення</li>
                    <li>Умови</li>
                </ul>
            </div>

            <div>
                <img src={support_icon} className={styles.support_icon} alt='img' />
                <ul className={styles.support}>Підтримка
                    <li>Довідковий центр</li>
                    <li>Поскаржитись на спам</li>
                    <li>Стати Постачальником</li>
                </ul>
            </div>

            <div className={styles.subscribe_wrapper}></div>
            <img src={email_icon} className={styles.email_icon} alt='img' />
            <p className={styles.email_text}>Отримуйте знижки та подарунки щотижня!</p>

            <form>
                <img src={email_input_icon} className={styles.email_input_icon} alt='img' />
                <input type="text" placeholder='            Enter your email...' className={styles.input} />
            </form>

            <div>
                <p className={styles.subscribe_text}>Натискаючі на кнопку, я погоджуюсь на обробку мого email згідно з
            <span className={styles.deel}> Угодою</span></p>
                <div className={styles.social}></div>
                <p className={styles.copy_right}>©</p>
                <p className={styles.copy_right_text}>2018 Web Templates LLC. Всі права захищені</p>
                <img src={fb_icon} className={styles.fb_icon} alt='img' />
                <img src={google_icon} className={styles.google_icon} alt='img' />
                <img src={pint_icon} className={styles.pint_icon} alt='img' />
                <img src={twit_icon} className={styles.twit_icon} alt='img' />
                <p className={styles.update_text}>Востаннє оновлено 17 листопада 2017</p>
            </div>

        </div >
    );
};

export default Footer;