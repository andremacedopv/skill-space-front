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

    width: 60%;

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

    .modal-title {
      font-weight: 500;
      font-size: 1.7rem;
      color: #282323;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.1rem;
      margin-left: 0.6rem;
      color: #3A3A3A;
      margin-bottom: 0.3rem;
    }

    .text-submission  {
      background: rgba(217, 217, 217, 0.37);
      resize: vertical;
      border: 1px solid rgba(0, 0, 0, 0.21);
      border-radius: 4px;
      width: 100%;
      padding: 0.5rem;
      font-family: 'Fira Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      box-sizing: border-box;
      margin-bottom: 1rem;
    }

    .buttons-container {
      margin-top: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      button {
        width: 15rem;
      }
    }
  }

`;