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
            .map((value, index) => {
                scoresMap.push(
                    <tr>
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
            <table class="table styled-table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nickname</th>
                        <th scope="col">Number of Attemps</th>
                        <th scope="col">Second passed</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.yourScore ? this.props.yourScore : ''}
                    {this.state.liArray}
                </tbody>
            </table>
            <button className='btn btn-info' onClick={this.playAgainHandler}>{this.props.playAgain ? 'Play Again' : 'Back to main menu'}</button>
        </div>
      );
    }
  }
export default HallOfFame; 