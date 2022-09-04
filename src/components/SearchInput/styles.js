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
            outline: none !important;
            border-bottom: 1px solid #007AFF !important;
            border-color: #007AFF !important;
            input {
                outline: none !important;
            }
        `
    }

    ${props => (props.failed) &&
        css`
                border-color: red !important;
                color: red !important;
        `
    }

        display: flex;
        background: #eff0f0;
        border: 1px solid rgba(0, 0, 0, 0.21);
        border-radius: 4px;
        width: 100%;
        padding: 0.5rem;
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 1.2rem;
        box-sizing: border-box;
        
        input {
            border: none;
            font-size: 1rem;
            background: #eff0f0;
            box-sizing: border-box;
            width: 100%;
            margin-left: 0.5rem;
        }
`