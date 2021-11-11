import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import '../index.css';
import Card from './Card';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.card = [];
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
                color: "brown",
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
                <Card 
                    cardProperties={n}
                    gameCallback={this.clickHandler}
                />
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

    clickHandler = (childData) => {
        this.card.push(childData);
        if(this.card.length > 1) {
            this.compareCard();
        }
        
    }

    compareCard() {
        if(this.card[0].id === this.card[1].id) {
            this.card.map((n) => {
                n.setState({ 
                    won: true,
                });
            })
            this.card = [];
        }
        else {
            setTimeout(() => {
                this.card.map((n) => {
                    n.setState({ 
                        fliped : false,
                    });
                })
                this.card = [];
            }
            , 1000)
            
        }
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