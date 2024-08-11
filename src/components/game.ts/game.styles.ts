import styled from "styled-components";

export const ButtonContainer = styled.div`
    margin-top: 20px;
    display: flex;
    gap: ${({theme}) => theme.gap.md};
`;

export const Status = styled.div`
    margin: 20px 0 30px;
    font-size: ${({theme}) => theme.fontSize};
    color: ${({theme}) => theme.colors.darkGreen};
`;

export const StyledGame = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        font-size: ${({theme}) => theme.fontSizeTitle};
        color: black;
    }
`;