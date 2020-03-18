import React, { Component } from 'react'

export default class Field extends Component {
    render() {
        return (
            <div className="parent-field">
        <div className="mainfield">
          <div className="field">
            <div className="penalty-area">
              <div className="goalkeeper-area">
              </div>
            </div>
            <div className="middle-line">
            </div>
            <div className="home-penalty-area">
              <div className="home-goalkeeper-area">
                <div className="player1">
                  <img src="./images/muslera.jpeg" alt="" />
                  <div className="player1-name">
                    <p>Muslera</p>
                  </div>
                </div> 
              </div>
            </div>
            <div className="defenders">
              <div className="player2">1</div>
              <div className="player3">2</div>
              <div className="player4">3</div>
              <div className="player5">4</div>
            </div>
            <div className="midfield">
              <div className="player6">1</div>
              <div className="player7">2</div>
              <div className="player8">3</div>
              <div className="player9">4</div>
            </div>
            <div className="forwards">
              <div className="player10">1</div>
              <div className="player11">2</div>
            </div>
          </div>
          <div className="horizontal-line" />
          <div className="vertical-line" />
        </div>
      </div>
        )
    }
}
