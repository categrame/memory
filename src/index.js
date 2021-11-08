import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var colorArray = [
    {
        id: 1,
        color: "red",
        left: 2,
    },
    {
        id: 2,
        color: "blue",
        left: 2,
    },
    {
        id: 3,
        color: "green",
        left: 2,
    },
    {
        id: 4,
        color: "pink",
        left: 2,
    },
    {
        id: 5,
        color: "cyan",
        left: 2,
    },
    {
        id: 6,
        color: "yellow",
        left: 2,
    },
    {
        id: 7,
        color: "black",
        left: 1,
    },
    {
        id: 8,
        color: "grey",
        left: 2,
    },
    {
        id: 9,
        color: "purple",
        left: 2,
    },
    {
        id: 10,
        color: "magenta",
        left: 2,
    },
    {
        id: 11,
        color: "white",
        left: 2,
    },
    {
        id: 12,
        color: "LightSalmon",
        left: 2,
    },
    {
        id: 13,
        color: "IndianRed",
        left: 2,
    },
]

class Game extends React.Component {


    rowGenerator(number) {
        let rowArray = [];
        for(let i= 0; i < number; i++){
            rowArray.push(<div className="row"><Card /></div>)
        }
        return rowArray;
    }

    render() {
        return (
            <div className="game-board container-fluid">
                <h1>Memory game</h1>
                {this.rowGenerator(5)}
            </div>
        );
    }
}

class Card extends React.Component {

    generateColor() {
        var randomColorObject = colorArray[Math.floor(Math.random()*colorArray.length)];

        var index = colorArray.indexOf(randomColorObject);

        colorArray[index].left = colorArray[index].left - 1;

        if(colorArray[index].left == 0){
            colorArray.splice(index, 1)
        }

        return randomColorObject.color;
    }

    cardGenerator(number) {
        let cardArray = [];
        for(let i= 0; i < number; i++){
            cardArray.push(<div style={{backgroundColor: this.generateColor()}} className="game-card col"></div>)
        }
        return cardArray;
    }
    render(){
        return(
            this.cardGenerator(5)
        )
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);