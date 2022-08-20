import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    height: 100vh;
    min-width: 16.75rem;
    width: 16.75rem;
    background-color: #DFDFDF;
    border-right: 4px solid #004E98;
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
        flex-direction: row;
        flex-wrap: wrap;
        gap: 15px;
        margin-top: 2.5rem;
        margin-left: 1rem;
        margin-right: 1rem;
    }

    .icon {
        height: 2.5rem;
        width: 2.5rem;
        color: #004E98;
        cursor: pointer;
    }.icon:hover {
        color: rgba(0,78,152, 0.6);
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

                min-width: 5rem;
                width: 5rem;
            `;
        }
    }}
`;