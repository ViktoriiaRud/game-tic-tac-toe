import styled from 'styled-components';

export const StyledBoard = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 200px);
    grid-template-rows: repeat(3, 200px);
    gap: ${({theme}) => theme.gap.xxs};
`;

export const StyledSquare = styled.button`
    width: 200px;
    height: 200px;
    background-color: ${({theme}) => theme.colors.greenSquare};
    border: 2px solid #546F49;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        background-color: ${({theme}) => theme.colors.grayHover};
    }
`;