import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 25px;
  transition: 0.6s;

  .icon {
    font-size: 50px;
  }

  h2 {
    font-family: 'Fira Sans';
    font-weight: 500;
    font-size: 30px;
    color: #554B4B;
  }

  :hover{
    filter: contrast(200%);
  }
`