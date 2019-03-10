import React from 'react';
import styles from './Product.module.css';
import product from '../img/order/product/product.svg';
import html5 from '../img/order/product/html5.svg';
import stars from '../img/order/product/stars.svg';
import delete_icon_right from '../img/order/order/delete_icon_right.svg';
import delete_icon_left from '../img/order/order/delete_icon_left.svg';

const Product = () => {
    return (
        <div>
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
        </div>
    );
};

export default Product;