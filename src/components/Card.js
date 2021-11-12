import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import '../index.css';
import _ from 'lodash';

class Card extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            fliped: setTimeout(() => this.setState({ 
                fliped: false,
                clickEvent: this.clickEvent.bind(this)
            }), 5000),
            won: false,
        }
        this.id = _.uniqueId("clr-");
        this.color = '';
        this.symbol = '';
    }

    clickEvent(){
        if(!this.state.won){
            this.setState({ 
                fliped: !this.state.fliped ,
            });
            this.props.gameCallback(this);
        }
    }

    changeCardState() {
        this.setState({
            fliped: !this.state.fliped
        })
    }

    cardGenerator() {
        this.color = this.props.cardProperties.color;
        this.symbol = this.props.cardProperties.svg;

        return (
        <div 
            key={this.id} 
            style={{backgroundColor: this.props.cardProperties.color}} 
            className={this.state.fliped ? 'game-card' : 'game-card fliped'}
            onClick={this.state.clickEvent}
        >
            {!this.state.fliped ? 
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-arrow-up-circle fliped-symbol" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
            </svg>
            : this.symbol
            }
         </div>)

    }

    render(){
        return(
            this.cardGenerator()
        )
    }
}

export default Card;