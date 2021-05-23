import React from "react";

class Result extends React.Component {
  constructor(props) {
    super(props);

    this.calculMostValue = this.calculMostValue.bind(this)
  }

  calculMostValue() {
    console.log(this.props)
    if(this.props.totalWalletValue !== 0) {
      return this.props.priceSell - (this.props.priceBuy * this.props.priceSell / this.props.totalWalletValue)
    }

    return 0
  }
  
  render() {
    let result = this.calculMostValue()
    console.log(result)
    return (
      <div>
          {result}
      </div>
    )
  }
}

export default Result