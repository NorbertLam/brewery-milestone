import React from 'react';


class BrewCard extends React.Component {
 
  handleClick=(e)=> {
    console.log("clicked")
   
  }

  createOptions = () => {
    return this.props.minBoardNames.map(board => <option>{board}</option>)
  }

  onChange = (e) => {
    
    this.props.addBnB([this.props.brewObj, e.target.value])
  }

  
  render(){
    return(
      <div onClick={this.handleClick} className="brew-card" style={{border:"1px solid black"}}>
        <a >{this.props.brewObj.name}</a>
        <select onChange={this.onChange}>
          <option>Select a Container</option>
          {this.createOptions()}
        </select>
      </div>
    )
  }
}

export default BrewCard
