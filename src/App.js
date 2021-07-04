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
    value = value ? value : 0
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="bg-gradient-to-r from-green-300 to-blue-600 h-screen overflow-hidden">
        <header className="pt-4 pl-8">
          <h1 className="text-lg text-white">Calculate your added value</h1>
        </header>

        <div className="xl:container mx-4 xl:mx-auto min-h-full relative">
          <div className="is-elements xl:flex justify-items-center absolute w-full top-1/2 bg-white bg-opacity-80 p-8 rounded-lg shadow-xl">
            <Form className="xl:w-8/12"
              onChangeValue={this.handleFormValueChange}
            />

            <Result className="xl:w-4/12"
              priceSell={this.state.priceSell}
              priceBuy={this.state.priceBuy}
              totalWalletValue={this.state.totalWalletValue}
            />
          </div>
        </div>

        <footer className="fixed bottom-3 right-6">
          <p className="text-lg text-white">Made by <a rel="noreferrer" href="https://twitter.com/ZhyroSty" target="_blank">Zhyrosty</a> with &#128159;</p>
        </footer>
      </div>
    );
  }
}

export default App;
