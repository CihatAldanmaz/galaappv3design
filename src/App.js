import React, { Component } from 'react'
import PlayerList from "./PlayerList"
import Field from "./Field"
import './style/style.css'

export default class App extends Component {
  render() {
    return (
      <div className = "maindiv">
     
          <div className = "playerscomponent">
        <PlayerList/>
        </div>
        <div className = "fieldcomponent">
      <Field />
        </div>

    </div>
    )
  }
}
