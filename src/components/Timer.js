import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import '../index.scss';

class Timer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            secondLeft: 5,
            gameStarted: false,
            secondSpent: 0,
            isTimerOver: false,
        }
    }
    
    componentDidMount() {
      this.updateInterval = setInterval(() => {
        if(this.state.secondLeft <= 1 || this.state.isTimerOver){
            this.setState({
                secondLeft: "Here we go !",
                gameStarted: true,
                isTimerOver: true,
            })
        } else {
            this.setState({
                secondLeft: this.state.secondLeft -1
            })
        }
        if(this.state.gameStarted){
          this.setState({
              secondSpent: this.state.secondSpent +1,
          })
        } else if(this.props.gameFinished) {
          this.componentWillUnmount()
        }
      }, 1000);
    }
    
    componentWillUnmount() {
      clearInterval(this.updateInterval);
    }

    returnSecondPassed() {
      this.componentWillUnmount()
      return this.state.secondSpent;
    }
  
    render() {
      return (
        <span>
          <span className={this.state.isTimerOver ? 'timer-board d-none' : 'timer-board'}>
            Second left before game: {this.state.secondLeft}
          </span>
          <span className={this.state.gameStarted ? 'timer-board' : 'timer-board d-none'}>
            Second passed: {this.state.secondSpent}
          </span>
        </span>
      );
    }
  }
export default Timer; 