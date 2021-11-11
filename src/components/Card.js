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

        return (
        <div 
            key={this.id} 
            style={{backgroundColor: this.props.cardProperties.color}} 
            className={this.state.fliped ? 'game-card col' : 'game-card fliped col'}
            onClick={this.state.clickEvent}
        >
         </div>)

    }

    render(){
        return(
            this.cardGenerator()
        )
    }
}

export default Card;