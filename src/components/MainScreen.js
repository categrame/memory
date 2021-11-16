import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import '../index.css';
import Game from './Game';

class MainScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isGameStarted: false,
            displayRules: false,
            displayHallOfFame: false,
            nickname: '',
        }
        this.handleClickPlay = this.handleClickPlay.bind(this);
        this.displayRules = this.displayRules.bind(this);
        this.defaultDisplay = 
        <div>
            <h2>Main Menu</h2>
            <ul>
                <li>
                    <button className="btn btn-primary" onClick={this.handleClickPlay}>Play</button>
                    <label>Enter a nickname (leave blank to play as an anonymous)</label>
                    <input
                        onChange={evt => this.getNickname(evt)}
                    />
                </li>
                <li><button className="btn btn-primary" onClick={this.displayRules}>Rules</button></li>
                <li><button className="btn btn-primary">Hall of Fame</button></li>
            </ul>
        </div>
    }
    handleClickPlay() {
        this.setState({
            isGameStarted: !this.state.isGameStarted,
        })
    }

    getNickname(evt) {
        this.setState({
            nickname: evt.target.value
        });
    }

    displayRules() {
        console.log("we're here")
        this.setState({
            displayRules: !this.state.displayRules
        })
    }
    
    render() {
      return (
          <span>
              {this.state.isGameStarted ? <Game nickname={this.state.nickname}/> : this.defaultDisplay}
              <span className={this.state.displayRules ? '' : 'd-none'}>Here are the rules</span>
          </span>
         
      );
    }
  }
export default MainScreen; 