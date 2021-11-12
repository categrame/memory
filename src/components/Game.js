import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import '../index.css';
import Card from './Card';
import Timer from './Timer';
import AttemptNumber from './AttempNumber';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.card = [];
        this.changeAttemptCounter = React.createRef();
        this.isGameFinished = false;
        this.allPointsToWin = 13;
        this.actualPoints = 0;
        this.colorArray = [
            {
                color: "Turquoise",
                left: 2,
                svg: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-bank card-symbol" viewBox="0 0 16 16">
                <path d="M8 .95 14.61 4h.89a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v7a.5.5 0 0 1 .485.379l.5 2A.5.5 0 0 1 15.5 17H.5a.5.5 0 0 1-.485-.621l.5-2A.5.5 0 0 1 1 14V7H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 4h.89L8 .95zM3.776 4h8.447L8 2.05 3.776 4zM2 7v7h1V7H2zm2 0v7h2.5V7H4zm3.5 0v7h1V7h-1zm2 0v7H12V7H9.5zM13 7v7h1V7h-1zm2-1V5H1v1h14zm-.39 9H1.39l-.25 1h13.72l-.25-1z"/>
                </svg>,
            },
            {
                color: "indigo",
                left: 2,
                svg: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-battery-charging card-symbol" viewBox="0 0 16 16">
                <path d="M9.585 2.568a.5.5 0 0 1 .226.58L8.677 6.832h1.99a.5.5 0 0 1 .364.843l-5.334 5.667a.5.5 0 0 1-.842-.49L5.99 9.167H4a.5.5 0 0 1-.364-.843l5.333-5.667a.5.5 0 0 1 .616-.09z"/>
                <path d="M2 4h4.332l-.94 1H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2.38l-.308 1H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
                <path d="M2 6h2.45L2.908 7.639A1.5 1.5 0 0 0 3.313 10H2V6zm8.595-2-.308 1H12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9.276l-.942 1H12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.405z"/>
                <path d="M12 10h-1.783l1.542-1.639c.097-.103.178-.218.241-.34V10zm0-3.354V6h-.646a1.5 1.5 0 0 1 .646.646zM16 8a1.5 1.5 0 0 1-1.5 1.5v-3A1.5 1.5 0 0 1 16 8z"/>
                </svg>,
            },
            {
                color: "green",
                left: 2,
                svg: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-bicycle card-symbol" viewBox="0 0 16 16">
                <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057 9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z"/>
                </svg>,
            },
            {
                color: "Orchid",
                left: 2,
                svg: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-bluetooth card-symbol" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="m8.543 3.948 1.316 1.316L8.543 6.58V3.948Zm0 8.104 1.316-1.316L8.543 9.42v2.632Zm-1.41-4.043L4.275 5.133l.827-.827L7.377 6.58V1.128l4.137 4.136L8.787 8.01l2.745 2.745-4.136 4.137V9.42l-2.294 2.274-.827-.827L7.133 8.01ZM7.903 16c3.498 0 5.904-1.655 5.904-8.01 0-6.335-2.406-7.99-5.903-7.99C4.407 0 2 1.655 2 8.01 2 14.344 4.407 16 7.904 16Z"/>
                </svg>,
            },
            {
                color: "cyan",
                left: 2,
                svg: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-binoculars-fill card-symbol" viewBox="0 0 16 16">
                <path d="M4.5 1A1.5 1.5 0 0 0 3 2.5V3h4v-.5A1.5 1.5 0 0 0 5.5 1h-1zM7 4v1h2V4h4v.882a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V13H9v-1.5a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5V13H1V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V4h4zM1 14v.5A1.5 1.5 0 0 0 2.5 16h3A1.5 1.5 0 0 0 7 14.5V14H1zm8 0v.5a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5V14H9zm4-11H9v-.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5V3z"/>
                </svg>,
            },
            {
                color: "Gold",
                left: 2,
                svg: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-boombox-fill card-symbol" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M14.5.5a.5.5 0 0 0-1 0V2H1a1 1 0 0 0-1 1v2h16V3a1 1 0 0 0-1-1h-.5V.5ZM16 6H0v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6ZM2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm7.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm-7-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm-2 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm7-1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0-2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"/>
                </svg>,
            },
            {
                color: "black",
                left: 1,
                svg: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-boxes card-symbol" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z"/>
                </svg>
            },
            {
                color: "Tomato",
                left: 2,
                svg: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-camera-reels-fill card-symbol" viewBox="0 0 16 16">
                <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path d="M9 6a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7z"/>
                </svg>,
            },
            {
                color: "SteelBlue",
                left: 2,
                svg: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-chat-left-dots-fill card-symbol" viewBox="0 0 16 16">
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                </svg>,
            },
            {
                color: "DodgerBlue",
                left: 2,
                svg: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-cloud-haze-fill card-symbol" viewBox="0 0 16 16">
                <path d="M4 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm2 2a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM13.405 4.027a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973z"/>
                </svg>,
            },
            {
                color: "SaddleBrown",
                left: 2,
                svg: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-cone-striped card-symbol" viewBox="0 0 16 16">
                <path d="m9.97 4.88.953 3.811C10.159 8.878 9.14 9 8 9c-1.14 0-2.158-.122-2.923-.309L6.03 4.88C6.635 4.957 7.3 5 8 5s1.365-.043 1.97-.12zm-.245-.978L8.97.88C8.718-.13 7.282-.13 7.03.88L6.275 3.9C6.8 3.965 7.382 4 8 4c.618 0 1.2-.036 1.725-.098zm4.396 8.613a.5.5 0 0 1 .037.96l-6 2a.5.5 0 0 1-.316 0l-6-2a.5.5 0 0 1 .037-.96l2.391-.598.565-2.257c.862.212 1.964.339 3.165.339s2.303-.127 3.165-.339l.565 2.257 2.391.598z"/>
                </svg>,
            },
            {
                color: "LightSalmon",
                left: 2,
                svg: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-discord card-symbol" viewBox="0 0 16 16">
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                </svg>,
            },
            {
                color: "grey",
                left: 2,
                svg: <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-dpad-fill card-symbol" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M6.5 0A1.5 1.5 0 0 0 5 1.5v3a.5.5 0 0 1-.5.5h-3A1.5 1.5 0 0 0 0 6.5v3A1.5 1.5 0 0 0 1.5 11h3a.5.5 0 0 1 .5.5v3A1.5 1.5 0 0 0 6.5 16h3a1.5 1.5 0 0 0 1.5-1.5v-3a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 0 16 9.5v-3A1.5 1.5 0 0 0 14.5 5h-3a.5.5 0 0 1-.5-.5v-3A1.5 1.5 0 0 0 9.5 0h-3Zm1.288 2.34-.799 1.278A.25.25 0 0 0 7.201 4H8.8a.25.25 0 0 0 .212-.382l-.799-1.279a.25.25 0 0 0-.424 0Zm0 11.32-.799-1.277A.25.25 0 0 1 7.201 12H8.8a.25.25 0 0 1 .212.383l-.799 1.278a.25.25 0 0 1-.424 0Zm-4.17-4.65-1.279-.798a.25.25 0 0 1 0-.424l1.279-.799A.25.25 0 0 1 4 7.201V8.8a.25.25 0 0 1-.382.212Zm10.043-.798-1.278.799A.25.25 0 0 1 12 8.799V7.2a.25.25 0 0 1 .383-.212l1.278.799a.25.25 0 0 1 0 .424Z"/>
                </svg>,
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
        this.changeAttemptCounter.current.increaseCounter();
        let checkBlackCard = this.checkIfItsBlackCard()
        console.log(checkBlackCard);
        if(this.actualPoints === this.allPointsToWin - 1 && checkBlackCard) {
            console.log("gagné le jeu !");
        }
        else if(checkBlackCard){
            console.log("perdu");
        }
        else {
            console.log("Le jeu continue");
        }
        if(this.card.length > 1) {
            this.compareCard();
        }
        
    }

    checkIfItsBlackCard(){
        let cardCheck = false
        this.card.map((n) => {
            if(n.color === "black"){
                cardCheck = true;
            }
        })
        return cardCheck;
    }

    compareCard() {
        if(this.card[0].color === this.card[1].color && this.card[0].id === this.card[1].id) {
            this.card = [];
            return;
        }
        if(this.card[0].color === this.card[1].color && this.card[0].id !== this.card[1].id) {
            this.card.map((n) => {
                n.setState({ 
                    won: true,
                });
            })
            this.actualPoints = this.actualPoints +1;
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

    returnRow() {
        let rowArray = [];
        for(let i = 0; i < 5; i++) {
            rowArray.push(this.rowGenerator());
        }
        return rowArray;
    }

    render() {
        return (
            <div className="game-board container-fluid">
                <h1>Memory game <Timer gameFinished={this.isGameFinished}/></h1>
                < AttemptNumber ref = {this.changeAttemptCounter} />
                {this.returnRow()}
            </div>
        );
    }
}

export default Game; 