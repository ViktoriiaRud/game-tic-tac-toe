import React, {useState} from 'react';
import Button from '../button';
import Container from '../container';
import Board from "../board";
import {StyledGame, Status, ButtonContainer} from "./game.styles";

type Player = 'X' | 'O' | null;

const Game: React.FC = () => {
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

    const winner = calculateWinner(board);
    const status = winner ? `Winner: ${winner}` : gameStarted ? `Next player: ${currentPlayer}` : 'Click Start to Play!';

    return (
        <Container>
            <StyledGame>
                <h1>Game Tic-Tac-Toe</h1>
                <Status>{status}</Status>
                <Board board={board} onClick={handleClick}/>
                <ButtonContainer>
                    <Button variant={'green'} onClick={startGame}>
                        Start Game
                    </Button>
                    <Button onClick={resetGame}>
                        Reset Game
                    </Button>
                </ButtonContainer>
            </StyledGame>
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

export default Game;
