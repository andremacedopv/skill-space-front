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
  backdrop-filter: blur(2px);

  display: flex;
  align-items: center;
  justify-content: center;

  .close-button {
    position: absolute;
    right: -15px;
    top: -15px;

    font-size: 25px;
    color: #4A4A4A;

    display: flex;
    padding: 6px;
    background-color: #D9D9D9;
    border-radius: 50px;

    cursor: pointer;

    transition: 0.6s;

    :hover {
      filter: brightness(90%);
    }
  }

  .modal-box {
    position: relative;
    background-color: #F8F9FA;
    border-radius: 7px;

    padding: 20px;

    width: 50%;

    @keyframes zoomIn {
      0% {
        transform:scale(0);
      }
      100% {
        transform:scale(1);
      }
    }

    animation: zoomIn 0.5s;

    font-family: 'Fira Sans';
  }

`;