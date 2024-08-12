import {EventObject, createMachine, assign} from 'xstate';

type currentPlayer = 'x' | 'o';

function validateEvent<TEvent extends EventObject, Type extends TEvent['type']>(
    ev: TEvent,
    type: Type
): asserts ev is Extract<TEvent, { type: Type }> {
    if (ev.type !== type) {
        throw new Error('Unexpected event type.');
    }
}

const context = {
    boardGame: Array(9).fill(null) as Array<currentPlayer | null>,
    turnCount: 0,
    currentPlayer: 'x' as currentPlayer,
    winner: undefined as currentPlayer | undefined
};

export const gameMachine = createMachine(
    {
        id: 'TicTacToe',
        initial: 'playing',
        types: {} as {
            context: typeof context;
            events: { type: 'PLAY'; value: number } | { type: 'RESET' };
        },
        context,
        states: {
            playing: {
                always: [
                    {target: 'gameOver.winner', guard: 'checkWin'},
                    {target: 'gameOver.draw', guard: 'checkDraw'}
                ],
                on: {
                    PLAY: [
                        {
                            target: 'playing',
                            guard: 'isValidMove',
                            actions: 'applyMove'
                        }
                    ]
                }
            },
            gameOver: {
                initial: 'winner',
                states: {
                    winner: {
                        tags: 'winner',
                        entry: 'setWinner'
                    },
                    draw: {
                        tags: 'draw'
                    }
                },
                on: {
                    RESET: {
                        target: 'playing',
                        actions: 'resetGame'
                    }
                }
            }
        }
    },
    {
        actions: {
            applyMove: assign({
                boardGame: ({context, event}) => {
                    validateEvent(event, 'PLAY');
                    const updatedBoard = [...context.boardGame];
                    updatedBoard[event.value] = context.currentPlayer;
                    return updatedBoard;
                },
                turnCount: ({context}) => context.turnCount + 1,
                currentPlayer: ({context}) => (context.currentPlayer === 'x' ? 'o' : 'x')
            }),
            resetGame: assign(context),
            setWinner: assign({
                winner: ({context}) => (context.currentPlayer === 'x' ? 'o' : 'x')
            })
        },
        guards: {
            checkWin: ({context}) => {
                const {boardGame} = context;
                const winningLines = [
                    [0, 1, 2],
                    [3, 4, 5],
                    [6, 7, 8],
                    [0, 3, 6],
                    [1, 4, 7],
                    [2, 5, 8],
                    [0, 4, 8],
                    [2, 4, 6]
                ];

                for (let line of winningLines) {
                    const xWin

                        = line.every((index) => {
                        return boardGame[index] === 'x';
                    });

                    if (xWin

                    ) {
                        return true;
                    }

                    const oWin

                        = line.every((index) => {
                        return boardGame[index] === 'o';
                    });

                    if (oWin

                    ) {
                        return true;
                    }
                }

                return false;
            },
            checkDraw: ({context}) => {
                return context.turnCount === 9;
            },
            isValidMove: ({context, event}) => {
                if (event.type !== 'PLAY') {
                    return false;
                }

                return context.boardGame[event.value] === null;
            }
        }
    }
);