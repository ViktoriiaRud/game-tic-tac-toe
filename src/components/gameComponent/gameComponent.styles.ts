import styled from "styled-components";
import {StyledGame} from "../game/game.styles";
import {StyledBoard} from "../board/board.styles";

export const StyledGameMachine = styled(StyledGame)`
    margin: 30px auto;

    h1 {
        margin-bottom: 20px;
        text-align: center;
        display: block;
    }
`;

export const StyledDraw = styled.div`
    width: 100%;
    max-height: 70px;
    background-color: ${({theme}) => theme.colors.orange};
    border-radius: 10px;
    
    h2 {
        display: block;
        text-align: center;
        margin-top: 20px;
        font-size: ${({theme}) => theme.fontSizeTitle};
        color: ${({theme}) => theme.colors.lightOrange};
    }
`;

export const StyledWinner = styled.div`
    width: 100%;
    max-height: 70px;
    background-color: ${({theme}) => theme.colors.green};
    border-radius: 10px;
    
    h2 {
        display: block;
        text-align: center;
        margin-top: 20px;
        font-size: ${({theme}) => theme.fontSizeTitle};
        color: ${({theme}) => theme.colors.lightOrange};
    }
`;

export const StyledBoardMachine = styled(StyledBoard)`
     height: 60vmin;
     width: 60vmin;
    gap: ${({theme}) => theme.gap.xs};
`;