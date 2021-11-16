import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import '../index.scss';

class FinalScreen extends React.Component {

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
            scores.sort((a, b) => a.attempt > b.attempt ? 1 : -1)
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
            <h1>{this.props.winOrLose}</h1>
            <p>You did {this.props.finalData.attempt + 1} attempt(s) in {this.props.finalData.secondPasses} second(s).</p>
            <h2>Hall of Fame</h2>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nickname</th>
                        <th scope="col">Number of Attemps</th>
                        <th scope="col">Second passed</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.yourScore}
                    {this.state.liArray}
                </tbody>
            </table>
            <button onClick={this.playAgainHandler}>Play again</button>
        </div>
      );
    }
  }
export default FinalScreen; 