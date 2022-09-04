import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 19rem;
    height: 9rem;
    
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    color: white;
    background-color: #666666;
    transition: background .2s ease-in;

    .description {
        font-family: 'Roboto Flex';
        font-style: normal;
        font-weight: 400;
        color: #CCCCCC;
        font-size: 0.8rem;
    }

    .icon-area {
        position: absolute;
        margin-top: 0.5rem;
        margin-right: 0.5rem;
        top: 0;
        right: 0;

        .lock {
            margin-right: 0.5rem;
            color: #999999;
        }
    }

    :hover {
        cursor: ${props => props.cursor || "pointer"};
        background: #010B19;
    }

    ${props => (props.status === 'completed') &&
        css `
            background-color: #03214A;
        `
    }

    ${props => (props.status === 'started') &&
        css `
            background-color: #004E98;
        `
    }
`;