import React from 'react';

class BoardForm extends React.Component {

  state = {
    name: ""
  }


  handleInput = (e) => {
    this.setState({name: e.target.value})
  }
  
   createBoard = () => {
   return (<div key={this.state.name} style={{width:"200px", height:"200px", border:"1px solid black"}}>
      <h1>{this.state.name}</h1>
    </div>)
  }
  
  handleCreate = () =>{
    const newBord=this.createBoard()
    this.props.createBoard(newBord)
  }


  render() {
    return(
      <div>
        <input type="text" name="name" onChange={this.handleInput}/>
        <button onClick={this.handleCreate}>Create</button>
      </div>
    )
  }
}

export default BoardForm;
