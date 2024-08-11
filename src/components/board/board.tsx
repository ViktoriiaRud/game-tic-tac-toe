import React from 'react';
import {StyledBoard, StyledSquare} from './board.styles';

type Player = 'X' | 'O' | null;

interface BoardProps {
    board: Player[];
    onClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({board, onClick}) => {
    const renderSquare = (index: number) => (
        <StyledSquare onClick={() => onClick(index)}>
            {board[index]}
        </StyledSquare>
    );

    return (
        <StyledBoard>
            {Array.from({length: 9}, (_, index) => renderSquare(index))}
        </StyledBoard>
    );
};

export default Board;