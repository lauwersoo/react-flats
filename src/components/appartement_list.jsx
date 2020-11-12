import React, { Component } from 'react'

import Appartement from "./appartement";

import flats from "../../data/flat";


class AppartementList extends Component {
  render() {
    return flats.map((flat) => {
      return <Appartement
        id={flat.id}
        key={flat.id}
        imageUrl={flat.imageUrl}
        price={flat.price}
        priceCurrency={flat.priceCurrency}
        name={flat.name}
      />
    })
  }
}

export default AppartementList
