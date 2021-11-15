import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import '../index.css';

class AttemptNumber extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            counter: 0,
        }
    }

    increaseCounter() {
        this.setState({
          counter: this.state.counter +1,
        })
    }

    returnNbOfAttempt() {
      return this.state.counter;
    }
  
    render() {
      return (
        <span>
          Number of attempt : {this.state.counter}
        </span>
      );
    }
  }
export default AttemptNumber; 