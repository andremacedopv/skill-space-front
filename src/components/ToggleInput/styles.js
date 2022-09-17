import styled, { css } from "styled-components";

export const Container = styled.div`
    margin: 0;
    width: 100%;
    
    span {
        color: red;
    }
`

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;

    button {
        background: rgba(217, 217, 217, 0.37);
        border: 1px solid rgba(0, 0, 0, 0.21);
        border-radius: 4px;
        width: 100%;
        padding: 0.5rem;
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        box-sizing: border-box;
        display: flex;
        color: #646363;
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
        cursor: pointer;
    }

    .circle {
        border-radius: 50%;
        background: #D9D9D9;
        border: 1px solid rgba(0, 0, 0, 0.21);
        height: 1.75rem;
        width: 1.75rem;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    ${props => (props.isSelected) &&
        css`
            button {
                background: #4E95FF;
                color: #fff;
            }

            .circle {
                background: #4E95FF;
                color: #fff;
            }
        `
    }
`