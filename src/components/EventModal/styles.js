import styled from 'styled-components';

export const Container = styled.div`

  left: 0;
  right: 0;
  top: 0;
  border: 0;

  height: 100vh;
  width: 100vw;
  z-index: 1;

  position: fixed;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  .modal-box {
    background-color: white;
    border-radius: 5px;
    padding: 80px 120px;
  }

`;