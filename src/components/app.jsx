import React, { Component } from 'react'

import AppartementList from './appartement_list.jsx'
import googleMaps from './google_map.jsx'

class App extends Component {
  render() {
    return(
      <div>
        <div className="flat-list">
          <AppartementList />
        </div>
        <div className="map-container">
          <googleMaps />
        </div>
      </div>
    )
  }
}

export default App
