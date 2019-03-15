import React from 'react';
import BoardForm from '../Components/BoardForm'
import MiniBoard from '../Components/MiniBoard'
import BoardCard from '../Components/BoardCard'

class BoardContainer extends React.Component {
  state = {
    boards: [],
    names: []
  }

  createBoard = (boardObj) => {
    
    const newNames = [...this.state.names, boardObj._self.state.name]
    const newBoards=[boardObj, ...this.state.boards]
  
      this.setState({
        boards: newBoards,
        names : newNames
      },()=>this.props.collectMinName(this.state.names))
  }

  render() {
    // 0 = brew obf
    // 1 = name
    const objArr=[]
    this.props.bnb.map((arrayBbj)=>objArr.push(arrayBbj[0]))
    const arrBoardCard = this.props.bnb.map(card=> <BoardCard brewObj={card[0]} />)
    return(
      
      <div className="board-container">
        <BoardForm createBoard={this.createBoard} />
        <MiniBoard Boards={this.state.boards} arrBoardCard={arrBoardCard}/>
      </div>
    )
  }
}

export default BoardContainer;
