import styled from "styled-components";

export const ButtonContainer = styled.div`
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: ${({theme}) => theme.gap.md};
`;

export const Status = styled.div`
    margin: 20px 0 30px;
    font-size: ${({theme}) => theme.fontSize};
    color: ${({theme}) => theme.colors.darkGreen};
`;

export const StyledGame = styled.div`
    margin-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: ${({theme}) => theme.fontSizeTitle};
        color: black;
        text-align: center;
        display: block;
    }
`;