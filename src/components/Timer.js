import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import '../index.css';

class Timer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            secondLeft: 5,
        }
    }
    
    componentDidMount() {
      this.updateInterval = setInterval(() => {
        if(this.state.secondLeft <= 1){
            this.componentWillUnmount()
            this.setState({
                secondLeft: "Here we go !"
            })
        } else {
            this.setState({
                secondLeft: this.state.secondLeft -1
            })
        }
      }, 1000);
    }
    
    componentWillUnmount() {
      clearInterval(this.updateInterval);
    }
  
    render() {
      return (
        <span>
        Second left before game : {this.state.secondLeft}
        </span>
      );
    }
  }
export default Timer; 