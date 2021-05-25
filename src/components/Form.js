import React from "react";

import '../style/form.css'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      priceSell: 0,
      priceBuy: 0,
      totalWalletValue: 0
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    const target = event.target
    this.setState({
      [target.name]: target.value
    })

    // Use props function to send values to parent element
    this.props.onChangeValue(target.name, target.value)
  }

  render() {
    return (
      <form className={`text-4xl leading-10 text-gray-500 ${this.props.className}`}>
        <label className="mb-5 block">
          <p className="inline">You sell at </p>
          <input className="bg-transparent border-b border-gray-500" type="text" name="priceSell" value={this.state.priceSell} onChange={this.handleInputChange}/>
          <p className="inline">€</p>
        </label>

        <label className="mb-5 block">
          <p className="inline"> and you bought it at </p>
          <input className="bg-transparent border-b border-gray-500" type="text" name="priceBuy" value={this.state.priceBuy} onChange={this.handleInputChange}/>
          <p className="inline">€</p>
        </label>

        <label className="mb-5 block">
          <p className="inline">The total value of your wallet is </p>
          <input className="bg-transparent border-b border-gray-500" type="text" name="totalWalletValue" value={this.state.totalWalletValue} onChange={this.handleInputChange}/>
          <p className="inline">€</p>
        </label>
      </form>
    )
  }
}

export default Form;