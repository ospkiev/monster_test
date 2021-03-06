import React from 'react';
import styles from './Order.module.css';
import service_icon from '../img/order/order/service_icon.svg';
import delete_icon_right from '../img/order/order/delete_icon_right.svg';
import delete_icon_left from '../img/order/order/delete_icon_left.svg';
import order from '../img/order/order/order.svg';


const Order = ({ deleteFunc, price }) => {
    return (
        <div>
            <div className={styles.order_wrapper}></div>
            <img src={service_icon} className={styles.service_icon} alt='img' />
            <p className={styles.service_text}>Service</p>
            <p className={styles.instalation}>Installation</p>
            <p className={styles.instalation_service}>Installation service is one of our all-ti...<br />
                <span className={styles.learn_more}>Learn More</span> </p>
            <p className={styles.price} value='20'>${price}</p>
            <p className={styles.delete_container} ></p>
            <label for='red_color'>
                <img src={delete_icon_right} className={styles.delete_icon_right} alt='img' onClick={deleteFunc} data-id='1' />
                <img src={delete_icon_left} className={styles.delete_icon_left} alt='img' onClick={deleteFunc} data-id='1' id='red_color' />
            </label>
            <img src={order} className={styles.order_img} alt='img' />
        </div>
    );
};

export default Order;