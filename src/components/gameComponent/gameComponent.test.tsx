import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import GameComponent from './gameComponent';
import { ThemeProvider } from 'styled-components';
import {theme} from "../../theme/theme";

describe('GameComponent', () => {
    const renderWithTheme = (component: React.ReactNode) => {
        return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
    };

    it('renders the game board', () => {
        renderWithTheme(<GameComponent />);
        const tiles = screen.getAllByRole('button', { name: '' });
        expect(tiles).toHaveLength(9);
    });

    it('updates the board when a tile is clicked', () => {
        renderWithTheme(<GameComponent />);
        const tile = screen.getByRole('button', { name: '' });

        userEvent.click(tile);

        expect(tile).toHaveAttribute('data-player', 'x');
    });

    it('shows the winner when a player wins', () => {
        renderWithTheme(<GameComponent />);

        const moves = [0, 3, 1, 4, 2]; // X wins with this sequence
        moves.forEach((move) => {
            const tile = screen.getAllByRole('button', { name: '' })[move];
            userEvent.click(tile);
        });

        expect(screen.getByText('Winner: x')).toBeInTheDocument();
    });

    it('resets the game when the Reset button is clicked', () => {
        renderWithTheme(<GameComponent />);

        const tile = screen.getByRole('button', { name: '' });
        userEvent.click(tile);

        const resetButton = screen.getByText('Reset');
        userEvent.click(resetButton);

        expect(tile).not.toHaveAttribute('data-player');
    });

    it('shows a draw message when the game is a draw', () => {
        renderWithTheme(<GameComponent />);

        const moves = [0, 1, 2, 4, 3, 5, 7, 6, 8]; // Draw scenario
        moves.forEach((move) => {
            const tile = screen.getAllByRole('button', { name: '' })[move];
            userEvent.click(tile);
        });

        expect(screen.getByText('Draw')).toBeInTheDocument();
    });
});
