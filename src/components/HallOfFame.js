import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import '../index.css';

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
            scores.map(value => {
                console.log(value);
                scoresMap.push(
                    <li>{value.attempt}</li>
                )
            })
            this.setState({
                liArray: scoresMap,
            })
        })
    }
    
    render() {
      return (
        <div>
            <h1>{this.props.winOrLose}</h1>
            <p>You did {this.props.finalData.attempt + 1} attempt(s) in {this.props.finalData.secondPasses} second(s).</p>
            <ul>
                {this.state.liArray}
            </ul>
        </div>
      );
    }
  }
export default HallOfFame; 