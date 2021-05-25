import React from 'react';
import Form from './components/Form';
import Result from './components/Result'
import './style/app.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      priceSell: 0,
      priceBuy: 0,
      totalWalletValue: 0
    }

    this.handleFormValueChange = this.handleFormValueChange.bind(this)
  }

  handleFormValueChange(name, value) {
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="bg-gradient-to-r from-green-300 to-blue-600 h-screen overflow-hidden">
        <header>Calcul Plus value</header>

        <div className="container mx-auto min-h-full relative">
          <div className="is-elements flex justify-items-center absolute w-full top-1/2 bg-white bg-opacity-80 p-8 rounded-lg shadow-xl">
            <Form className="w-8/12"
              onChangeValue={this.handleFormValueChange}
            />

            <Result className="w-4/12"
              priceSell={this.state.priceSell}
              priceBuy={this.state.priceBuy}
              totalWalletValue={this.state.totalWalletValue}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
