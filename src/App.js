import React from 'react';
import './App.css';
import Cards from './components/Cards'
import Actions from './components/Actions'
class App extends React.Component {
  constructor(props) {
    super(props);
    let cards = JSON.parse(localStorage.getItem('Cards'));
    this.state = { cards };

    this.createCard = this.createCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  createCard() {
    let updatedData;
    if (this.state.cards) {
      updatedData = this.state.cards;
      updatedData.unshift({
        cardId: Date.now(),
        cardName: 'Новый список',
        todos: [],
      });
    } else {
      updatedData = [
        {
          cardId: Date.now(),
          cardName: 'Новый список',
          todos: [],
        }
      ];
    }

    this.setState({
      cards: updatedData,
    })

    localStorage.setItem('Cards', JSON.stringify(updatedData));
  }

  deleteCard(cardId) {
    let currentData = JSON.parse(localStorage.getItem('Cards'));
      if (currentData) {
        let updatedData = currentData.filter((card) => card.cardId !== cardId);

        localStorage.setItem('Cards', JSON.stringify(updatedData));
        this.setState({
          cards: updatedData
        });
      }
  }

  render() {
    return (
      <div className="App">
        <Actions createCard={this.createCard}/>
        <Cards localStorageData={this.state.cards} deleteCard={this.deleteCard}/>
      </div>
    );
  }
  
}

export default App;
