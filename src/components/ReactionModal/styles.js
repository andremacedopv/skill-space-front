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

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  

    font-family: 'Fira Sans';

    @keyframes zoomIn {
      0% {
        transform:scale(0);
      }
      100% {
        transform:scale(1);
      }
    }

    animation: zoomIn 0.5s;

    .emojis {

      display: flex;
      justify-content: center;
      gap: 20px;
      margin-bottom: 20px;

      .emoji-container {
        display: flex;
        padding: 5px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1px;
        cursor: pointer;

        .icon {
          font-size: 35px;
        }
      }

      .emoji-container.selected {
        border-bottom:2px #03214A solid;
      }
    }

    .users {
      width: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;

      .user-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 15px;
        width: 100%;
        padding: 8px;

        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;

        .name-image {
          display: flex;
          align-items: center;
          gap: 15px;
        }


        img{
          object-fit: cover;
          height: 45px;
          width: 45px;
          border-radius: 30px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

        .icon {
          font-size: 25px;
        }
      }
    }
  }

`;