import React, { Component } from 'react'

class Appartement extends Component {
  constructor(props) {
    super(props)

    this.state = { active: false };
  }

  handleClick = () => {
    this.setState({ active: !this.state.active })
  }

  render() {
    return (
      <div className={this.state.active ? "active card" : "card"}
      style={{backgroundImage: `url(${this.props.imageUrl})`}}
      onClick={this.handleClick}
      >
        <div className="card-price">
          {this.props.price} {this.props.priceCurrency}
        </div>
        <div className="card-description">
          {this.props.name}
        </div>
        <a className="card-link" href="#"></a>
      </div>
    )
  }
}

export default Appartement
