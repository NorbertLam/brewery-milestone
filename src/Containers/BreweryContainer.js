import React from 'react';
import BrewCard from '../Components/BrewCard'

const BreweryContainer = (props) => {
    const arrOfBreweries = props.breweries.map(brew => <BrewCard key={brew.id} brewObj={brew} boards={props.boards} minBoardNames={props.minBoardNames} addBnB={props.addBnB}/>)

    return (
      <div className="index-sidebar">
        <h1>INDEX OF BREWERIES</h1>
        {arrOfBreweries}
      </div>
    )
}

export default BreweryContainer;
