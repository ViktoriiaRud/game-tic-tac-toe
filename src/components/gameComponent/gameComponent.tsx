import {useMachine} from '@xstate/react';
import React from 'react';
import {gameMachine} from "../../gameMachine";
import Container from "../container";
import {StyledDraw, StyledGameMachine, StyledWinner, StyledBoardMachine} from "./gameComponent.styles";
import Button from "../button";
import {ButtonContainer} from "../game/game.styles";

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
        <Container>
            <StyledGameMachine>
                <div className="game">
                    <h1>Game Tic-Tac-Toe</h1>
                    <StyledBoardMachine className="board">
                        {range(0, 9).map((index) => {
                            return (
                                <Tile
                                    index={index}
                                    onClick={() => send({type: 'PLAY', value: index})}
                                    key={index}
                                    player={state.context.boardGame[index]}
                                />
                            );
                        })}
                    </StyledBoardMachine>
                    <ButtonContainer>
                        <Button size={'md'} onClick={() => send({type: 'RESET'})}>Reset</Button>
                    </ButtonContainer>
                    <StyledDraw>
                        {state.hasTag('draw') && <h2>Draw</h2>}
                    </StyledDraw>
                    {state.matches('gameOver') && (
                        <StyledWinner>
                            {state.hasTag('winner') && <h2>Winner: {state.context.winner}</h2>}
                        </StyledWinner>
                    )}
                </div>
            </StyledGameMachine>
        </Container>
    );
}