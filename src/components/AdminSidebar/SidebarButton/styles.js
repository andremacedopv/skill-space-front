import styled from "styled-components";

export const ButtonContainer = styled.button`
    display: flex;
    border: 1px solid transparent;
    border-radius: 5px;
    width: 100%;
    padding: 0.8rem 0rem;
    font-size: 1.35rem;
    padding-left: 0.8rem;
    background-color: transparent;
    color: #fff;

    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;

    .main-area {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .main-btn {
        display: flex;
    }

    .icon-btn {
        height: 1.5rem;
        margin-right: 0.8rem;
    }

    .icon-arrow {
        height: 1.5rem;
        margin-right: 0.8rem;
        color: transparent;
    }

    :hover {
        background: rgba(255, 255, 255, 0.11);
        border-color: #8AB6DF;

        .icon-arrow {
            color: rgba(255, 255, 255, 0.71);
        }
    }

    ${(props) => {
        if (props.collapse) {
            return `
                .text-btn {
                    display: none;
                }
                .icon-arrow {
                    display: none;
                }
            `;
        }
        else if (props.expand){
          return(
            `   
                border-radius: 5px 5px 0px 0px;
                border-color: #8AB6DF;
                transition: 350ms;

                .icon-arrow {
                    color: rgba(255, 255, 255, 0.71);
                }
            `
          )
        } 
    }}
`;

export const OptionsContainer = styled.div`
    display: none;
    flex-direction: column;
    border: 1px solid #8AB6DF;
    border-radius: 0px 0px 5px 5px;
    padding: 0.8rem 0rem;
    font-size: 1.1rem;
    padding-left: 0.8rem;
    background-color: transparent;
    color: #fff;
    margin-bottom: 0.5rem;

    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;

    .dashboard-link {
        text-decoration: none;
        color: #fff;
    }.dashboard-link:hover {
        color: rgba(255, 255, 255, 0.6);
    }

    ${(props) => {
        if (props.collapse){
            return(
              `   
                  display: none;
              `
            )
        } 
        else if (props.expand){
          return(
            `   
                display: flex;
            `
          )
        } 
    }}
`;