import { useMachine } from '@xstate/react';
import React from 'react';
import './styles.css';
import {gameMachine} from "../../gameMachine";

function range(start: number, end: number) {
    return Array(end - start)
        .fill(null)
        .map((_, i) => i + start);
}

const Tile: React.FC<{
    index: number,
    onClick: () => void,
    player: 'x' | 'o' | null,
    key?: number
}> = ({index, onClick, player, key}) => {
    return (
        <div
            className="tile"
            key={index}
            onClick={onClick}
            data-player={player}
        ></div>
    );
};

export default function GameComponent() {
    const [state, send] = useMachine(gameMachine);

    return (
        <div className="game">
            <h1>Tic-Tac-Toe</h1>
            {state.matches('gameOver') && (
                <div>
                    {state.hasTag('winner') && <h2>Winner: {state.context.winner}</h2>}
                    {state.hasTag('draw') && <h2>Draw</h2>}
                    <button onClick={() => send({ type: 'RESET' })}>Reset</button>
                </div>
            )}
            <div className="board">
                {range(0, 9).map((index) => {
                    return (
                        <Tile
                            index={index}
                            onClick={() => send({ type: 'PLAY', value: index })}
                            key={index}
                            player={state.context.boardGame[index]}
                        />
                    );
                })}
            </div>
        </div>
    );
}