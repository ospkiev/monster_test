import React from 'react';
import logo from '../img/logo/logo.svg';
import help from '../img/menu/help.svg';
import collection from '../img/menu/collection.svg';
import account from '../img/menu/account.svg';
import cart from '../img/menu/cart.svg';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.header}>
            <img src={logo} className={styles.logo} alt='img' />
            <ul>
                <li><img src={help} className={styles.help} alt='img' /></li>
                <li><img src={collection} className={styles.collection} alt='img' /></li>
                <li><img src={account} className={styles.account} alt='img' /></li>
                <li><img src={cart} className={styles.cart} alt='img' /></li>
            </ul>
        </div>
    );
};

export default Header;