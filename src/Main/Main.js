import React from 'react';
import styles from './Main.module.css';
import order from '../img/order/order/order.svg';
import service_icon from '../img/order/order/service_icon.svg';
import checkout_bg from '../img/order/checkout_bg.svg';
import button_bg from '../img/order/button/button_bg.svg';
import adviser from '../img/didYouFind/adviser.svg';
import benefits from '../img/order/benefits.svg';
import stroke_icon from '../img/order/button/stroke_icon.svg';
import delete_icon_right from '../img/order/order/delete_icon_right.svg';
import delete_icon_left from '../img/order/order/delete_icon_left.svg';
import product from '../img/order/product/product.svg';
import html5 from '../img/order/product/html5.svg';
import stars from '../img/order/product/stars.svg';
import start_chat from '../img/didYouFind/start_chat.svg';
import arrow_left_icon from '../img/order/arrow_left_icon.svg'

const Main = ({ sum }) => {
    return (
        <div className={styles.main}>
            <img src={arrow_left_icon} className={styles.arrow_left_icon} alt='img' />
            <h2 className={styles.text}><span>{sum}</span>Продукти у кошику</h2>
            <div className={styles.order_wrapper}></div>
            <img src={service_icon} className={styles.service_icon} alt='img' />
            <p className={styles.service_text}>Service</p>
            <p className={styles.instalation}>Installation</p>
            <p className={styles.instalation_service}>Installation service is one of our all-ti...<br />
                <span className={styles.learn_more}>Learn More</span> </p>
            <p className={styles.price}>$19</p>
            <p className={styles.delete_container}></p>
            <img src={delete_icon_right} className={styles.delete_icon_right} alt='img' />
            <img src={delete_icon_left} className={styles.delete_icon_left} alt='img' />
            <img src={order} className={styles.order_img} alt='img' />

            <div>
                <p className={styles.total}>Сума:</p>
                <p className={styles.sum}>$119.70</p>
                <img src={checkout_bg} className={styles.checkout_bg} alt='img' />
                <img src={benefits} className={styles.benefits} alt='img' />
            </div>
            <div>
                <p className={styles.button_text}>Перейти на чекаут</p>
                <img src={button_bg} className={styles.button_bg} alt='img' />
                <img src={stroke_icon} className={styles.stroke_icon} alt='img' />
            </div>
            <div className={styles.product_wrapper}></div>
            <img src={product} className={styles.product_img} alt='img' />
            <img src={html5} className={styles.html5} alt='img' />
            <p className={styles.gradient}></p>
            <p className={styles.travelino_agency}>Travelino Agency Te</p>
            <span className={styles.old_price}>$1,800</span>
            <span className={styles.new_price}>$1,555</span>
            <img src={stars} className={styles.stars} alt='img' />
            <p className={styles.delete_product_container}></p>
            <p className={styles.product_text_bottom}> I want to use it <span className={styles.only_once}>only once</span> </p>
            <img src={delete_icon_right} className={styles.delete_product_icon_right} alt='img' />
            <img src={delete_icon_left} className={styles.delete_product_icon_left} alt='img' />

            <div className={styles.adviser_wrapper}></div>
            <img src={adviser} className={styles.adviser} alt='img' />
            <p className={styles.adviser_text}>шукаєте щось особливе?
               Підберіть бажане разом з консультантом!
            </p>
            <img src={start_chat} className={styles.start_chat} alt='img' />
        </div >
    );
};

export default Main;