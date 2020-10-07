import styled from 'styled-components';

export const Container = styled.div`
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    display: flex;
    align-items: center;
    color: #666360;
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