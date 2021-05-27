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
    this.getError = this.getError.bind(this)
  }

  handleInputChange (e) {
    const target = e.target

    this.setState({
      [target.name]: parseFloat(target.value)
    })

    // Use props function to send values to parent element
    this.props.onChangeValue(target.name, target.value)
  }

  getError(inputName) {
    if(inputName === "priceSell") {
      // use extern function for this
      let error = this.state.priceSell > this.state.totalWalletValue ? "Your price sell can't be higher than your total wallet value" : undefined

      if (error) {
        return <p className="text-xl text-red-500">{error}</p>
      }
    }
  }

  render() {
    return (
      <form className={`text-xl md:text-4xl leading-10 text-gray-500 ${this.props.className}`}>
        <label className="mb-5 block">
          <p className="inline">You sell at </p>
          <input className="bg-transparent border-b border-gray-500" type="number" min={this.state.totalWalletValue} name="priceSell" value={this.state.priceSell} onChange={this.handleInputChange}/>
          <p className="inline">€</p>
          {this.getError("priceSell")}
        </label>

        <label className="mb-5 block">
          <p className="inline"> and you bought it at </p>
          <input className="bg-transparent border-b border-gray-500" type="number" min="0" name="priceBuy" value={this.state.priceBuy} onChange={this.handleInputChange}/>
          <p className="inline">€</p>
        </label>

        <label className="mb-5 block">
          <p className="inline">The total value of your wallet is </p>
          <input className="bg-transparent border-b border-gray-500" type="number" min="0" name="totalWalletValue" value={this.state.totalWalletValue} onChange={this.handleInputChange}/>
          <p className="inline">€</p>
        </label>
      </form>
    )
  }
}

export default Form;