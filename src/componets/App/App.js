import React, { Component } from 'react';
import Header from '../Header';
import OrderList from '../OrderList';


class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Header/>
          <OrderList/>
        </React.Fragment>
    );
  }
}

export default App;
