import React from 'react';
import './App.css';
import { Container, Col, Row } from 'reactstrap';
import PlayerList from './PlayerList';
import './style/style.css'
import Field from './Field';


function App() {

  let jsonexample = () => {
    let players = {
      players1:{
        id:1,
        name:"muslera",
        number:1,
        position:"GK"
      }
    }
  }

  return (
    <div className = "maindiv">
     
          <div className = "playerscomponent" players = {this.jsonexample}>
        <PlayerList/>
        </div>
        <div className = "fieldcomponent">
      <Field />
        </div>

    </div>
  );
}

export default App;
