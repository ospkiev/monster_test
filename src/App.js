import React, { Component } from 'react';
import styles from './App.css';
import Header from './Header/Header';
import Main from './Main/Main'
import Footer from './Footer/Footer';

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
        <Main sum={sum} />
        <Footer />
        <p className={styles.counter}>{sum}</p>
        <button onClick={this.incrementFunc}>PLUS</button>
        <button onClick={this.decrementFunc}>MINUS</button>

      </div>
    );
  }
}

export default App;
