import React from 'react';
import Form from './components/Form';
import Result from './components/Result'

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
      <div>
        <header>Calcul Plus value</header>

        <div className="container mx-auto flex">
          <Form className="flex-6" 
            onChangeValue={this.handleFormValueChange} 
          />

          <Result className="flex-6" 
            priceSell={this.state.priceSell}
            priceBuy={this.state.priceBuy}
            totalWalletValue={this.state.totalWalletValue}
          />
        </div>
      </div>
    );
  }
}

export default App;
