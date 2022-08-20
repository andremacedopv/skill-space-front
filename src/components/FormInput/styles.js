import styled, { css } from "styled-components";

export const Container = styled.div`
    margin: 0;
    width: 100%;
    
    span {
        color: red;
    }
`

export const InputContainer = styled.div`
    ${props => (props.isFocus) &&
        css`
            input {
                outline: none !important;
                border-bottom: 1px solid #007AFF !important;
                border-color: #007AFF !important;
            }
        `
    }

    ${props => (props.failed) &&
        css`
            input {
                border-color: red !important;
                color: red !important;
            }
        `
    }

    input {
        background: rgba(217, 217, 217, 0.37);
        border: 1px solid rgba(0, 0, 0, 0.21);
        border-radius: 4px;
        width: 100%;
        padding: 0.625rem;
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 1.2rem;
        box-sizing: border-box;
    }
`