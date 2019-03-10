import React from 'react';
import styles from './Product.module.css';
import product from '../img/order/product/product.svg';
import html5 from '../img/order/product/html5.svg';
import stars from '../img/order/product/stars.svg';
import delete_icon_right from '../img/order/order/delete_icon_right.svg';
import delete_icon_left from '../img/order/order/delete_icon_left.svg';

const Product = ({ deleteFunc, price }) => {
    return (
        <div>
            <div className={styles.product_wrapper}></div>
            <img src={product} className={styles.product_img} alt='img' />
            <img src={html5} className={styles.html5} alt='img' />
            <p className={styles.gradient}></p>
            <p className={styles.travelino_agency}>Travelino Agency Te</p>
            <span className={styles.old_price}>$1,800</span>
            <span className={styles.new_price} >${price}</span>
            <img src={stars} className={styles.stars} alt='img' />
            <p className={styles.delete_product_container}></p>
            <p className={styles.product_text_bottom}> I want to use it <span className={styles.only_once}>only once</span> </p>
            <img src={delete_icon_right} className={styles.delete_product_icon_right} alt='img' data-id='2' onClick={deleteFunc} />
            <img src={delete_icon_left} className={styles.delete_product_icon_left} alt='img' data-id='2' onClick={deleteFunc} />
        </div >
    );
};

export default Product;