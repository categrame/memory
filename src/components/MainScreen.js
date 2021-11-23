import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import '../index.scss';
import Game from './Game';
import HallOfFame from './HallOfFame';

class MainScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isGameStarted: false,
            displayRules: false,
            displayHallOfFame: false,
            nickname: localStorage.getItem('memory-nickname'),
            displayHallOfFame: false,
        }
        this.handleClickPlay = this.handleClickPlay.bind(this);
        this.handleHallOfFame = this.handleHallOfFame.bind(this);
        this.defaultDisplay = 
        <div className="main-menu container-fluid">
            <h1>MEMORY GAME</h1>
            <div className="row row-main-menu mx-auto">
                <div className="button-main-menu col-12 play-col">
                    <div className='row center-row'>
                        <div className='col-md-6 col-sm-12 center-col'>
                            <a className='play-link' href="#" onClick={this.handleClickPlay}>Play</a>
                        </div>
                        <div className='col-md-6 col-sm-12 center-col'>
                            <label className="input">
                                <input class="input__field" 
                                    onChange={evt => this.getNickname(evt)} 
                                    defaultValue={this.state.nickname} 
                                    type="text" 
                                    placeholder=" " />
                                <span class="input__label">Your nickname</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row row-main-menu mx-auto'>
                <div className="button-main-menu col-12 rules-col">
                    <div className='row center-row'>
                        <div className='col-md-6 col-sm-12 center-col'>
                            <h2 className='rule-h2'>Rules</h2>
                        </div>
                        <div className='col-md-6 col-sm-12 center-col'>
                            <p className='rules-text'>You'll have 5 seconds to memorize the cards. 
                                Notice there is the black card. 
                                You must click this card in last. 
                                If you don't, you lose.
                                Try to make the less attempt and time possible !
                            </p>
                        </div>
                    </div>
                </div>    
            </div>
            <div className='row row-main-menu mx-auto'>
                <div className="button-main-menu col-12 haf-col">
                    <a href="#" onClick={this.handleHallOfFame} className='haf-link'>Hall of Fame</a>
                    <p className='haf-line'>Click to see the best player of this memory game</p>
                </div>
            </div>
        </div>
    }
    handleClickPlay() {
        localStorage.removeItem('memory-nickname');
        localStorage.setItem('memory-nickname', this.state.nickname);
        this.setState({
            isGameStarted: !this.state.isGameStarted,
        })
    }

    handleHallOfFame() {
        this.setState({
            displayHallOfFame: !this.state.displayHallOfFame
        })
    }

    getNickname(evt) {
        this.setState({
            nickname: evt.target.value
        });
    }
    
    render() {
      return (
          <>
            <span className={this.state.displayHallOfFame ? 'd-none' : ''}>
                {this.state.isGameStarted ? <Game nickname={this.state.nickname}/> : this.defaultDisplay}
            </span>
            <span className={this.state.displayHallOfFame ? '' : 'd-none'}>
                <HallOfFame />
            </span>
          </>
          
         
      );
    }
  }
export default MainScreen; 