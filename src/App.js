import React, { Component } from 'react'
import PlayerList from "./PlayerList"
import Field from "./Field"
import './style/style.css'

export default class App extends Component {
  state = {
    players:{
      player1:{
        name:'muslera',
        position:'GK'
      }
    }
  }
  render() {
    return (
      <div className = "maindiv">
     
          <div className = "playerscomponent">
        <PlayerList players={this.state.players}/>
        </div>
        <div className = "fieldcomponent">
      <Field />
        </div>

    </div>
    )
  }
}
