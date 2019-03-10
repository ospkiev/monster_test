import React, { Component } from 'react';
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
import arrow_left_icon from './img/order/arrow_left_icon.svg'

class App extends Component {

  state = {
    sum: 2,
  }

  incrementFunc = () => {
    this.setState(prev => ({
      sum: prev.sum + 1,
    }))
  }

  decrementFunc = () => {
    if (this.state.sum === 0) {
      return;
    }
    this.setState(prev => ({
      sum: prev.sum - 1,
    }))
  }

  render() {
    const { sum } = this.state;
    return (
      <div className="App">
        <Header />
        <Order />
        <Product />
        <Footer />
        <div className={styles.main}>
          <img src={arrow_left_icon} className={styles.arrow_left_icon} alt='img' />
          <h2 className={styles.text}><span>{sum} </span>Продукти у кошику</h2>

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
