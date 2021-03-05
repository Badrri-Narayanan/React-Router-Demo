import React from 'react';
import './App.css';
import Homepage from './page/Homepage';
import About from './page/About';
import CharactersPage from './page/CharactersPage'
import AllisonCameron from './page/Characters/AllisonCameron'
import EricForeman from './page/Characters/EricForeman'
import GregHouse from './page/Characters/GregHouse'
import JamesWilson from './page/Characters/JamesWilson'
import LisaCuddy from './page/Characters/LisaCuddy'
import RobertChase from './page/Characters/RobertChase'
import { Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>House M.D.</h1>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route path="/characters" component={CharactersPage} />
        <Route exact path="/characters/greg_house" component={ GregHouse } />
        <Route exact path="/characters/eric_foreman" component={ EricForeman } />
        <Route exact path="/characters/robert_chase" component={ RobertChase } />
        <Route exact path="/characters/allison_cameron" component={ AllisonCameron } />
        <Route exact path="/characters/lisa_cuddy" component={ LisaCuddy } />
        <Route exact path="/characters/james_wilson" component={ JamesWilson } />
      </div>
    );
  }
}

export default App;
