import styled from "styled-components";

export const Container = styled.div`

    a {
        text-decoration: none;
    }

    min-height: 100vh;
    min-width: 16.75rem;
    width: 16.75rem;
    background-color: #DFDFDF;
    border-right: 4px solid #004E98;
    transition: width 0.2s;

    transition: 0.2s linear;

    position: relative;
    top: 0;
    z-index: 1;

    overflow: hidden;

    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;

    .sidebar {
        padding: 0 5%;
        display: flex;
        flex-direction: column;
        gap: 30px;
        height: 100%;
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
        margin-top: 2.5rem;
        margin-left: 1rem;
        margin-right: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        
        .sidebar-buttons-row {
            display: flex;
            flex-direction: ${(props) => props.collapse ? "column" : "row"};;
            justify-content: center;
            gap: 15px;
        }
    }
    .profile {
        padding: 30px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
        
        img{
            object-fit: cover;
            height: ${(props) => props.collapse ? "40px" : "50px"};
            width: ${(props) => props.collapse ? "40px" : "50px"};
            border-radius: 30px;
        }

        .profile-texts{
            display:  ${(props) => props.collapse ? "none" : "block"};
            p {
                margin: 0;
            }
            .profile-name{
                font-size: 20px;
                color: #352F2F;
            }
            .profile-email{
                font-size: 16px;
                color: #7C7979;
            }
        }
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