import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import '../index.css';

class Card extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            fliped: false,
        }
    }

    cardGenerator() {
        let cardArray = [];
        this.props.cardProperties.map((n) => {
            console.log(n);
            cardArray.push(<div key={n.id} style={{backgroundColor: n.color}} className='game-card col'></div>)
        })
        return cardArray;
    }
    render(){
        return(
            this.cardGenerator()
        )
    }
}

export default Card;