import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    height: 100vh;
    min-width: 16.75rem;
    width: 16.75rem;
    background-color: #004E98;
    border-radius: 0px 5px 5px 0px;
    transition: width 0.2s;

    transition: 0.2s linear;

    position: relative;
    top: 0;
    z-index: 1;

    overflow: auto;

    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;

    .sidebar {
        display: flex;
        flex-direction: column;
        padding: 0 5%;
        margin-top: 1rem;
    }

    .sidebar-header {
        display: flex;
        flex-direction: row;
        margin: 1.5rem 1.5rem 0;
        justify-content: space-between;

        img {
            height: 2.5rem;
        }
    }

    .sidebar-body {
        display: flex;
        flex-direction: column;
        margin-top: 2.5rem;
        margin-left: 1rem;
        margin-right: 1rem;
    }

    .sidebar-bottom {
        display: flex;
        align-items: center;
        position: absolute; 
        bottom: 0;
        margin: 1.5rem;
        color: #fff;

        font-size: 1rem;

        .icon-bottom {
            height: 1.7rem;
            width: 1.7rem;
            margin-right: 0.5rem;
        }
    }.sidebar-bottom:hover {
        color: rgba(255, 255, 255, 0.6);
    }

    .icon {
        height: 2.5rem;
        width: 2.5rem;
        color: #fff;
        cursor: pointer;
    }.icon:hover {
        color: rgba(255, 255, 255, 0.6);
    }

    ${(props) => {
        if (props.collapse) {
            return `

                .sidebar-header {
                    margin: 1.5rem auto 0;
                    img {
                        display: none;
                    }
                }

                .sidebar-bottom {
                    .bottom-text {
                        display: none;
                    }
                }

                min-width: 5rem;
                width: 5rem;
            `;
        }
    }}
`;