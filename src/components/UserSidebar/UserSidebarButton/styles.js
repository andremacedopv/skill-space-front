import styled from "styled-components";

export const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 10px;

  button{
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${(props) => props.collapse ? "45px" : "90px"};
    width: ${(props) => props.collapse ? "45px" : "90px"};
    background-color: #DAD8D8;

    cursor: pointer;
  
    border: 1px solid #908D8D;
    border-radius: ${(props) => props.collapse ? "5px" : "16px"};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    transition: 0.4s;

    .button-icon {
      height: ${(props) => props.collapse ? "1.6rem" : "2.5rem"};
      width: ${(props) => props.collapse ? "1.6rem" : "2.5rem"};
      color:  ${(props) => props.color};
      transition: 0.4s;
    }
  }

  button:hover{
    background-color: ${(props) => props.color};

    .button-icon {
      color:  #FFFFFF;
    }
  }

  p{
    font-family: 'Roboto Flex';
    font-size: 15px;
    color: #747070;
    margin-bottom: 0;
    display: ${(props) => props.collapse ? "none" : "block"}
  }
`