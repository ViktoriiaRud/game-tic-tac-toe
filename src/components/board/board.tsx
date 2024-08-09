import React, {useState} from 'react';
import {ButtonContainer, Game, Status, StyledBoard, StyledSquare} from "./board.styles";
import Button from "../button";
import Container from "../container";

type Player = 'X' | 'O' | null;

const Board: React.FC = () => {
    const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
    const [gameStarted, setGameStarted] = useState<boolean>(false);

    const handleClick = (index: number) => {
        if (!gameStarted || board[index] || calculateWinner(board)) {
            return;
        }
        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    };

    const startGame = () => {
        setBoard(Array(9).fill(null));
        setCurrentPlayer('X');
        setGameStarted(true);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setCurrentPlayer(null);
        setGameStarted(false);
    };

    const renderSquare = (index: number) => (
        <StyledSquare onClick={() => handleClick(index)}>
            {board[index]}
        </StyledSquare>
    );

    const winner = calculateWinner(board);
    const status = winner ? `Winner: ${winner}` : `Next player: ${currentPlayer}`;

    return (
        <Container>
            <Game>
                <h1>Game Tic-Tac-Toe</h1>
                <Status>{status}</Status>
                <StyledBoard>
                    {Array.from({length: 9}, (_, index) => renderSquare(index))}
                </StyledBoard>
                <ButtonContainer>
                    <Button variant={'green'} onClick={startGame}>
                        Start Game
                    </Button>
                    <Button onClick={resetGame}>
                        Reset Game
                    </Button>
                </ButtonContainer>
            </Game>
        </Container>
    );
};

const calculateWinner = (squares: Player[]): Player => {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const [a, b, c] of lines) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

export default Board;