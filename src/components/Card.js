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
        this.id = 0;
        this.color = '';
        this.clickEvent = this.clickEvent.bind(this);
    }

    clickEvent(){
        this.setState({ fliped: !this.state.fliped });
        console.log(this.state.fliped);
    }

    cardGenerator() {
        this.id = this.props.cardProperties.id;
        this.color = this.props.cardProperties.color;
        
        return <div key={this.props.cardProperties.id} style={{backgroundColor: this.props.cardProperties.color}} className={this.state.fliped ? 'game-card col' : 'game-card fliped col'} onClick={this.clickEvent}></div>

    }
    render(){
        return(
            this.cardGenerator()
        )
    }
}

export default Card;