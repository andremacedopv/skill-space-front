import styled from "styled-components";

export const Container = styled.div`
  padding: 4px 8px;

  background-color: #F1F451;
  display: inline-block;
  position: relative; 

  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  color: #3F3F3F;

  :before {
    color: #F1F451;
    border-right: 15px solid;
    border-top: 11px solid transparent;
    border-bottom: 11px solid transparent;
    content: '';
    position: absolute;
    left: -15px;
    top: 0px;
  }

`;