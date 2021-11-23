import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import '../index.scss';

class HallOfFame extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            liArray: [],
        };
        this.emptyScore = 
            <tr>
                <th colSpan="100%" scope="row">No score yet ! Be the first.</th>
            </tr>
    }

    componentDidMount() {
        fetch(
            process.env.REACT_APP_FIREBASE_LINK
        ).then(response => {
            return response.json();
        }).then(data => {
            const scores = [];
            for (const key in data) {
                const score = {
                    id: key,
                    ...data[key]
                }
                scores.push(score);
            }
            let scoresMap = [];

            scores.sort((a, b) => {
                if(a.attempt === b.attempt) {
                    if(a.secondPasses > b.secondPasses){
                        return 1;
                    }
                    else {
                        return -1;
                    }
                }
                else if(a.attempt > b.attempt) {
                    return 1
                }
                else {
                    return -1;
                }
            })
            .forEach((value, index) => {
                scoresMap.push(
                    <tr key={index +1}>
                        <th scope="row">{index +1}</th>
                        <td>{value.nickname ? value.nickname : "Anonymous"}</td>
                        <td>{value.attempt}</td>
                        <td>{value.secondPasses}</td>
                    </tr>
                )
            })
            this.setState({
                liArray: scoresMap,
            })
        })
    }

    playAgainHandler() {
        window.location.reload(false);
    }
    
    render() {
      return (
        <div>
            <h2 className="haf-title">Hall of Fame</h2>
            <table className="table styled-table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nickname</th>
                        <th scope="col">Number of Attemps</th>
                        <th scope="col">Second passed</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.yourScore ? this.props.yourScore : null}
                    {(this.state.liArray.length > 0) ? this.state.liArray : this.emptyScore}
                </tbody>
            </table>
            <button className='btn btn-info' onClick={this.playAgainHandler}>{this.props.playAgain ? 'Play Again' : 'Back to main menu'}</button>
        </div>
      );
    }
  }
export default HallOfFame; 