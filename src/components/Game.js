import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import '../index.css';
import Card from './Card';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.colorArray = [
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
    }

    rowGenerator() {

        let rowArray = [];
        for(let i= 0; i < 5; i++){
            let cardProperty = this.generateColor();
            rowArray.push(cardProperty)
        }
        let cardArray = [];
        rowArray.map((n) => {
            cardArray.push(
                <Card cardProperties={n}/>
            );
        })

        return (<div className="row">
            {cardArray}
        </div>)
    }

    generateColor() {

        var randomColorObject = this.colorArray[Math.floor(Math.random()*this.colorArray.length)];

        var index = this.colorArray.indexOf(randomColorObject);

        this.colorArray[index].left = this.colorArray[index].left - 1;

        if(this.colorArray[index].left === 0){
            this.colorArray.splice(index, 1)
        }

        return randomColorObject;
    }

    render() {
        return (
            <div className="game-board container-fluid">
                <h1>Memory game</h1>
                {this.rowGenerator()}
                {this.rowGenerator()}
                {this.rowGenerator()}
                {this.rowGenerator()}
                {this.rowGenerator()}
            </div>
        );
    }
}

export default Game; 