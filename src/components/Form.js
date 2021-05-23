import React from "react";

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
      <form>
        <label>
          Price to sell:
          <input type="text" name="priceSell" value={this.state.priceSell} onChange={this.handleInputChange}/>
        </label>

        <label>
          Price to buy:
          <input type="text" name="priceBuy" value={this.state.priceBuy} onChange={this.handleInputChange}/>
        </label>

        <label>
          Total wallet Value:
          <input type="text" name="totalWalletValue" value={this.state.totalWalletValue} onChange={this.handleInputChange}/>
        </label>
      </form>
    )
  }
}

export default Form;