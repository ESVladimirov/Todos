import React from 'react';
import Card from './Card';

export default class Cards extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
    }


    render() {
        let cards;
        if (this.props.localStorageData) {
            cards = this.props.localStorageData.map((card) => <Card key={card.cardId.toString()} 
                                                                    data={card.todos} 
                                                                    cardId={card.cardId} 
                                                                    cardName={card.cardName}
                                                                    deleteCard={this.props.deleteCard}
                                                                />);
        }
        
        return (
            <div>
                {cards}
            </div>
        );
        
    }
}