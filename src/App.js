import React, { Component } from 'react';
// import { Route, NavLink, Switch } from "react-router-dom";
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Order from './Order/Order';
import Product from './Product/Product';
import styles from './App.module.css';
import checkout_bg from './img/order/checkout_bg.svg';
import button_bg from './img/order/button/button_bg.svg';
import adviser from './img/didYouFind/adviser.svg';
import benefits from './img/order/benefits.svg';
import stroke_icon from './img/order/button/stroke_icon.svg';
import start_chat from './img/didYouFind/start_chat.svg';
import arrow_left_icon from './img/order/arrow_left_icon.svg';


const arrOfOrders = [{ id: 1, price: 25 }, { id: 2, price: 40 }];

class App extends Component {

  state = {
    numberOfOrders: 0,
    removeOrder: true,
    removeProduct: true,
    total: 0,
  }

  componentDidMount = () => {
    this.setState({
      numberOfOrders: arrOfOrders.length,
      total: arrOfOrders.reduce((acc, el) => acc + el.price, 0),
    })
  }

  deleteFunc = (e) => {
    let id = e.target.dataset.id;
    if (+id === 1) {
      let itemPrice = arrOfOrders.filter(el => el.id === +id)[0].price;
      this.setState(prev => ({
        removeOrder: !prev.removeOrder,
        numberOfOrders: prev.numberOfOrders - 1,
        total: prev.total - itemPrice,
      })
      )
    } else {
      this.setState(prev => ({
        removeProduct: !prev.removeProduct,
        numberOfOrders: prev.numberOfOrders - 1,
        total: prev.total - arrOfOrders[1].price,
      }))
    }
  }

  render() {
    const { numberOfOrders, removeOrder, removeProduct, total } = this.state;
    return (
      <div className="App">
        {/* <Header /> */}
        {removeOrder ? <Order deleteFunc={this.deleteFunc} price={arrOfOrders[0].price} /> : null}
        {removeProduct ? <Product deleteFunc={this.deleteFunc} price={arrOfOrders[1].price} /> : null}
        <Footer />
        <div className={styles.main}>
          <img src={arrow_left_icon} className={styles.arrow_left_icon} alt='img' />
          <h2 className={styles.text}><span>{numberOfOrders} </span>Продукти у кошику</h2>
          <div>
            <p className={styles.total}>Сума:</p>
            <p className={styles.sum}>${total}</p>
            <img src={checkout_bg} className={styles.checkout_bg} alt='img' />
            <img src={benefits} className={styles.benefits} alt='img' />
          </div>
          <div>
            <p className={styles.button_text}>Перейти на чекаут</p>
            <img src={button_bg} className={styles.button_bg} alt='img' />
            <img src={stroke_icon} className={styles.stroke_icon} alt='img' />
          </div>
          <div className={styles.adviser_wrapper}></div>
          <img src={adviser} className={styles.adviser} alt='img' />
          <p className={styles.adviser_text}>шукаєте щось особливе?
             Підберіть бажане разом з консультантом!
            </p>
          <img src={start_chat} className={styles.start_chat} alt='img' />
        </div >
      </div>
    );
  }
}

export default App;
