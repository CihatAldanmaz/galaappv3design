import React, { Component } from 'react'
import './style/style.css'

export default class PlayerList extends Component {
    render() {
        console.log(this.props.players)
        return (
            <div className = "playerlist">
                playerlist
            </div>
        )
    }
}
