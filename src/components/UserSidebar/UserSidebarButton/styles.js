import styled from "styled-components";

export const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  button{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 100px;
    background-color: #DAD8D8;
  
    border: 1px solid #908D8D;
    border-radius: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    .button-icon {
      height: 2.5rem;
      width: 2.5rem;
      color:  ${(props) => props.color};
      cursor: pointer;
    }

  }

  p{
    font-family: 'Roboto Flex';
    color: #747070;
  }
`