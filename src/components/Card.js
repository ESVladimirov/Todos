import React from 'react';
import Todos from './Todos';
export default class Card extends React.Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {cardName: props.cardName};
        this.updateTodosInLocalStorage = this.updateTodosInLocalStorage.bind(this);
        this.updateCardNameInLocalStorage = this.updateCardNameInLocalStorage.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    updateTodosInLocalStorage(todos) {
        let currentData = JSON.parse(localStorage.getItem('Cards'));
        
        if (currentData) {
          let updatedData = currentData.map((card) => {
            if (card.cardId === this.props.cardId) {
              card.todos = todos;
            }
            return card;
          })
          
          localStorage.setItem('Cards', JSON.stringify(updatedData));
        } else {
          let newData = [
            {
              cardId: this.props.cardId,
              cardName: this.state.cardName,
              todos,
            }
          ]
          localStorage.setItem('Cards', JSON.stringify(newData));
        }
      }

    updateCardNameInLocalStorage(editedCardName) {
      let currentData = JSON.parse(localStorage.getItem('Cards'));
        
        if (currentData) {
          let updatedData = currentData.map((card) => {
            if (card.cardId === this.props.cardId) {
              card.cardName = editedCardName;
            }
            return card;
          })
          
          localStorage.setItem('Cards', JSON.stringify(updatedData));
        } else {
          let newData = [
            {
              cardId: this.props.cardId,
              cardName: editedCardName,
              todos: []
            }
          ]
          localStorage.setItem('Cards', JSON.stringify(newData));
        }
    }

    handleChange(event) {
      this.setState({
        cardName: event.target.value
      })
      
      this.updateCardNameInLocalStorage(event.target.value);
    }
    render() {
        return (
            <div className="Card">
              <div className="Card-top">
                <div className="Card-top-title">
                  <input type="text" className="cardName" value={this.state.cardName} onChange={this.handleChange}></input>
                </div>
                <button onClick={() => this.props.deleteCard(this.props.cardId)} className='deleteCard'>&times;</button>
                
              </div>
              <div className="Card-bot">
                <div className="Card-bot-content">
                  <Todos todos={this.props.data} updateTodosInLocalStorage={this.updateTodosInLocalStorage}/>
                </div>
              </div>
            </div>
          );
    }
}