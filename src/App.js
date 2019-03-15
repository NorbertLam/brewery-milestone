import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BreweryContainer from './Containers/BreweryContainer'
import BoardContainer from './Containers/BoardContainer';

class App extends Component {

  state = {
    breweries: [],
    boards: [],
    minBoardsNames: [],
    brewAndBoard: []
  }

  componentDidMount() {
    fetch('https://api.openbrewerydb.org/breweries').then(resp => resp.json()).then(breweries => {
      this.setState({breweries});
    })
  }

  collectMinName= (nameArr)=>{
    const newNameArr=[...this.state.minBoardsNames, nameArr];
    this.setState({
      minBoardsNames: newNameArr
    },()=>console.log("inside app.js", this.state)
    )
  }

  addBnB = (obj) => {
      this.setState({
      brewAndBoard: [...this.state.brewAndBoard, obj]
    })
  }

  render() {
    return (
      <div className="App">
        <BreweryContainer breweries={this.state.breweries} boards={this.state.boards} minBoardNames={this.state.minBoardsNames} addBnB={this.addBnB}/>
        <BoardContainer collectMinName={this.collectMinName} bnb={this.state.brewAndBoard}/>
      </div>
    );
  }
}

export default App;
