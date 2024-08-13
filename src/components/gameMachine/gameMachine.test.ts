import { interpret } from 'xstate';
import {gameMachine} from "./gameMachine";

describe('Tic-Tac-Toe State Machine', () => {
    it('should start in the playing state', () => {
        const service = interpret(gameMachine).start();
    });

    it('should update the board when a valid move is made', () => {
        const service = interpret(gameMachine).start();

        service.send({ type: 'PLAY', value: 0 });
    });

    it('should detect a winning move', () => {
        const service = interpret(gameMachine).start();

        service.send({ type: 'PLAY', value: 0 });
        service.send({ type: 'PLAY', value: 3 });
        service.send({ type: 'PLAY', value: 1 });
        service.send({ type: 'PLAY', value: 4 });
        service.send({ type: 'PLAY', value: 2 });

    });

    it('should detect a draw', () => {
        const service = interpret(gameMachine).start();

        [0, 1, 2, 4, 3, 5, 7, 6, 8].forEach((move) => {
            service.send({ type: 'PLAY', value: move });
        });
    });

    it('should reset the game', () => {
        const service = interpret(gameMachine).start();

        service.send({ type: 'PLAY', value: 0 });
        service.send({ type: 'RESET' });
    });
});
