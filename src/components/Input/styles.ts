import styled, { css } from 'styled-components';

interface ContainerProps{
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #232129;
    border-radius: 10px;

    border: 2px solid #232129;
    color: #666360;


    padding: 16px;
    width: 100%;
    display: flex;
    align-items: center;

    ${(props) => props.isFocused && css` color: #FF9000; border-color: #FF9000; `}
    ${(props) => props.isFilled && css` color: #FF9000;`}

    input{
        color: #F4EDE8;
        flex: 1;
        border: 0;
        background: transparent;
        &::placeholder{
            color: #666360;
        }
    }
    svg{
        margin-right: 16px;
    }
    & + div {
        margin-top: 8px;
    }
`;
