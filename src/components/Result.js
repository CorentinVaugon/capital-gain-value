import React from "react";

class Result extends React.Component {
  constructor(props) {
    super(props);

    this.calculMostValue = this.calculMostValue.bind(this)
    this.renderResult = this.renderResult.bind(this)
  }

  calculMostValue() {
    if(this.props.totalWalletValue !== 0 && this.props.priceSell !== 0 && this.props.priceBuy !== 0) {
      const result = this.props.priceSell - (this.props.priceBuy * this.props.priceSell / this.props.totalWalletValue)

      // get 2 digit after .
      return result.toFixed(2)
    }

    return 0
  }

  handleColor(value) {
    let color = 'text-gray-500'
    if(value > 0) {
      color = 'text-green-500'
    }
    else if(value < 0) {
      color = 'text-red-500'
    }

    return color
  }

  renderResult() {
    let result = this.calculMostValue()

    if(result > 0) {
      let color = this.handleColor(result)

      return ( 
        <p className={`text-8xl ${color}`}>
          {result} €
        </p>
      )
    }
  }

  render() {
    return (
      <div className={`flex justify-center items-center ${this.props.className}`}>
        {this.renderResult()}
      </div>
    )
  }
}

export default Result