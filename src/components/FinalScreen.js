import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import '../index.scss';
import HallOfFame from './HallOfFame';

class FinalScreen extends React.Component {

    render() {
      return (
        <>
            <h1>{this.props.winOrLose}</h1>
            <p className='resume-score'>You did {this.props.finalData.attempt + 1} attempt(s) in {this.props.finalData.secondPasses} second(s).</p>
            <HallOfFame 
                yourScore={this.props.yourScore}
                playAgain={true}
            />
        </>
      );
    }
  }
export default FinalScreen; 