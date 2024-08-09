import styled from 'styled-components';

export const Game = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Status = styled.div`
    margin-bottom: 10px;
    font-size: 24px;
`;

export const StyledBoard = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 200px);
    grid-template-rows: repeat(3, 200px);
    gap: 5px;
`;

export const StyledSquare = styled.button`
    width: 200px;
    height: 200px;
    background-color: #97E773;
    border: 2px solid #546F49;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }
`;

export const ButtonContainer = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 34px;
`;