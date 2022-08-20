import styled from 'styled-components';

export const ButtonContainer = styled.button`
    border: none;
    transition: 0.5s;
    width: 100%;
    padding: 1rem 1.5rem;
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1.2rem;

    border-radius: 9px;
    color: white;
    background: #03214A;

    :hover {
        cursor: ${props => props.cursor || "pointer"};
        background: #010B19;
    }
`;