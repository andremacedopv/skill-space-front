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
        padding: 0.5rem;
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        box-sizing: border-box;
    }
`

export const customStyles = {
    menu: base => ({
        ...base,
        fontFamily: 'Fira Sans',
        fontSize: '1.2rem',
        width: '100%',
        margin: 0,
        boxShadow: 'none',
        border: '1px solid rgba(0, 0, 0, 0.21)',
        padding: '0.5rem',
        borderRadius: 0,
    }),

    control: base => ({
        ...base,
        backgroundColor: 'rgba(217, 217, 217, 0.37)',
        color: '#6E6E6E',
        fontFamily: 'Fira Sans',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '1.2rem',
        paddingBottom: '0.25rem',
        paddingTop: '0.25rem',
    }),

    clearIndicator: base => ({
        ...base,
        cursor: 'pointer'
    }),

    placeholder: base => ({
        ...base,
    }),

    dropdownIndicator: () => ({
        cursor: 'pointer',
    })
}