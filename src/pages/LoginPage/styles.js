import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
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
        max-height: 100vh;
        height: 100vh;
        
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

        .purple {
            color: #967093;   
        }
    }

    .form-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        max-width: 50%;
        width: 50%;
        max-height: 100vh;
        height: 100vh;

        @media(max-width: 870px) {
            max-width: 100%;
            width: 100%;
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
            max-width: 95%;
        }

        .input-area {
            margin-top: 3rem;
            margin-bottom: 0.4rem;
            width: 22rem;

            .email-form {
                margin-bottom: 0.625rem;
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
        }

        .submit-btn {
            width: 22rem;
        }
    }
`;