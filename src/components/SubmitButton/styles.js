import styled from 'styled-components';

export const ButtonContainer = styled.button`
    border: none;
    transition: 0.5s;
    width: 100%;
    padding: 0.8rem 1.5rem;
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 1.1rem;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7%;

    border-radius: 9px;
    color: white;
    background: ${props => {
        switch (props.color) {
            case "dark-blue": return "#03214A";
            case "light-blue": return "#004E98";
            case "red": return "#752520";
            case "green": return "#3B7520";
            default: return "#03214A"
        }
        }};

    :hover {
        cursor: ${props => props.cursor || "pointer"};
        filter: contrast(200%)
    }
`;