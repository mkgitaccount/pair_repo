import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Gameboard extends Component {
    constructor() {
        super();
        document.createElement("canvas")
        this.startGame = this.startGame.bind(this);
        this.component2 = this.component2.bind(this);
        this.updateGameArea = this.updateGameArea.bind(this);
        this.state = {
            canvas: document.createElement("canvas"),
            start: function () {
                this.canvas.width = 480;
                this.canvas.height = 270;
                this.context = this.canvas.getContext("2d");
                document.body.insertBefore(this.canvas, document.body.childNodes[0]);
                this.interval = setInterval(this.updateGameArea, 20);
            },
            stop: function () {
                clearInterval(this.interval);
            },
            clear: function () {
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            }
        }



        // var myGameArea = {
        //     canvas: document.createElement("canvas"),
        //     start: function () {
        //         this.canvas.width = 480;
        //         this.canvas.height = 270;
        //         this.context = this.canvas.getContext("2d");
        //         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        //         this.interval = setInterval(this.updateGameArea, 20);
        //     },
        //     stop: function () {
        //         clearInterval(this.interval);
        //     },
        //     clear: function () {
        //         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        //     }
        // }






    }
    componentDidMount() {
        // console.log("did mount");
        // this.updateGameArea();
    }
    startGame() {

        this.state.start();
    }
    component2(width, height, color, x, y, type) {
        this.type = type;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.gravity = - 0.1;
        this.gravitySpeed = 0;
        this.update = function () {
            let ctx = this.myGameArea.context;
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
        this.newPos = function () {
            this.gravitySpeed += this.gravity;
            this.x += this.speedX;
            this.y += this.speedY + this.gravitySpeed;
        }
    }
    updateGameArea() {
        var myGamePiece;
        var myGamePiece2;
        myGamePiece = new this.component2(30, 30, "red", 100, 300);
        myGamePiece2 = new this.component2(30, 30, "green", 300, 300);
        this.state.clear();
        myGamePiece.newPos();
        myGamePiece.update();
        myGamePiece2.newPos();
        myGamePiece2.update();
    }
    render() {
       
        return (
            <div className="Gameboard">
                <canvas>
                    {this.component2(30, 30, "red", 100, 300)}
                    </canvas>

            </div>
        );
    }
}

export default Gameboard;