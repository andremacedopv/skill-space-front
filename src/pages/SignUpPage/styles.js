import styled, {css} from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    font-family: 'Roboto Flex';

    .image-container {
        @media(max-width: 870px) {
            display: none;
        }

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        max-width: 50%;
        width: 50%;
        min-height: 100vh;
        
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;

        img {
            width: 50%;
        }

        span {
            color: #F8F9FA;
            font-style: italic;
            font-weight: 500;
            font-size: 3rem;
            text-align: center;
            width: 80%;
            margin-bottom: 5rem;

            @media(max-width: 1000px) {
                width: 100%;
                font-size: 2.2rem;
            }
        }

        .highlight {
            color: #000;
            text-shadow: 1px 0 #967093, -1px 0 #967093, 0 1px #967093, 0 -1px #967093,
             1px 1px #967093, -1px -1px #967093, 1px -1px #967093, -1px 1px #967093;
        }
    }

    .data-container {
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        max-width: 50%;
        width: 50%;
        min-height: 100vh;

        @media(max-width: 870px) {
            max-width: 100%;
            width: 100%;
        }

        .header-div {
            max-width: 45%;
            width: 45%;

            @media(max-width: 1000px) {
                max-width: 80%;
                width: 80%;
            }

            
            display: flex;
            gap: 10rem;
            align-items: center;
            justify-content: space-between;
            
            @media(max-width: 430px) {
                max-width: 95%;
                width: 95%;
                gap: 0;
            }
        }

        .step-area {
            display: flex;
            gap: 0.5rem;
        }

        .welcome-text {
            text-align: center;
            font-style: normal;
            font-weight: 400;
            margin: 0;
            font-size: 2.5rem;
            text-align: center;
        }

        .info-text {
            margin-top: 0.2rem;
            font-weight: 400;
            color: #474747;
            font-size: 1rem;
            text-align: center;
            max-width: 55%;

            @media(max-width: 1000px) {
                max-width: 95%;
            }
        }

        .input-area {
            margin-top: 3rem;
            margin-bottom: 0.4rem;
            width: 22rem;

            .form-data {
                margin-bottom: 0.625rem;
            }

            .dual-field {
                display: flex;
                gap: 0.5rem;
                margin-bottom: 0.625rem;

                .smaller-field {
                    width: 4rem;
                }

                .bigger-field {
                    width: 17.5rem;
                }
            }
        }

        a {
            color: #2D5CB6;
            font-size: 1rem;
            text-decoration: none;
        }

        .password-recover {
            margin-bottom: 1rem;
        }

        .sign-up-label {
            margin-top: 0.5rem;
            color: #474747;
            text-align: center;
            margin-bottom: 1rem;
        }

        .toggles-div {
            width: 22rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            margin: 3rem;
        }

        .submit-btn {
            width: 22rem;
        }
        
        .form-container {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }
    }

`;

export const StepBtn = styled.button`
    color: #000;
    background: #fff;
    border: 1px solid #000;
    border-radius: 50%;
    font-size: 1rem;
    padding: 0.2rem 0.5rem; 
        
    :hover {
        cursor: pointer;
        box-shadow: inset 0px 4px 30px rgba(0, 0, 0, 0.25);
    }

    ${props => (props.selected === true) &&
        css `
        color: #fff;
        background: #004E98;
        border: 1px solid #004E98;
        `
    }
`;