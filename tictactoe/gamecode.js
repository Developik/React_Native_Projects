import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
//import './buttonDesign.scss'
import { Container, Row, Col } from 'react-bootstrap';
//import './buttonDesign.scss';
//import './gameCode.css';

function Square(props) {
    return (
        <button className="square" class = "button" size="lg"
            onClick={props.onClick} style={{}} block>
            {props.value}
            </button>
    );
}


class Board extends React.Component {

    constructor(props) {
        super(props);
        var possibleColors = {};
        this.state = {
            squares: Array(9).fill(null),
            xIsNext: true,
            //boxColor: possibleColors[Math.floor(Math.random() * items.length)];
        };

    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        });
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]}
            onClick={() => this.handleClick(i)} />;

    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner && winner != "Draw") {
            status = 'Winner: ' + winner;
        }
        else if (winner === "Draw") {
            status = 'Draw between X and O ';
        }
        else {
            status = 'Next player: ' +
                (this.state.xIsNext ? 'X' : 'O');
        }
        return (
            <Container>
                <h1 className="status" id = "top_phrase">{status}</h1>
                <Row xs="3" className="board-row">

                    <Col>
                            {this.renderSquare(0)}
                    </Col>
                    <Col>
                        {this.renderSquare(1)}
                    </Col>
                    <Col>
                        {this.renderSquare(2)}
                    </Col>
                </Row>
                <Row xs="3" className="board-row">
                    <Col>
                        {this.renderSquare(3)}
                    </Col>
                    <Col>
                        {this.renderSquare(4)}
                    </Col>
                    <Col>
                        {this.renderSquare(5)}
                    </Col>
                </Row>
                <Row xs="3" className="board-row">
                    <Col>
                        {this.renderSquare(6)}
                    </Col>
                    <Col>
                        {this.renderSquare(7)}
                    </Col>
                    <Col >
                        {this.renderSquare(8)}
                    </Col>
                </Row>
            </Container>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    let sqrFull = true;
    for (let i = 0; i < lines.length; i++) {
        if (squares[i] == null)
            sqrFull = false;
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    if (sqrFull)
        return "Draw";
    return null;
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

export default Game;

// ========================================

//ReactDOM.render(
//    <Game />,
//    document.getElementById('root')
//);
