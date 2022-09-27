import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  font-family: 'Roboto Flex';
  padding: 5vh 3vw;

  section.user-info {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-bottom: 5vh;
    width: 80%;
    gap: 5vw;

    .image-info {
      display: flex;
      gap: 3vw;
      align-items: center;

      img{
        object-fit: cover;
        width: 200px;
        aspect-ratio: 1/1;
        border-radius: 999px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
  
      .info {
        display: flex;
        flex-direction: column;
        font-family: 'Fira Sans';
  
        h1 {
          
          font-weight: 500;
          font-size: 35px;
          color: #282424;
          margin-bottom: 2vh;
        }
  
        p {
          font-weight: 500;
          font-size: 19px;
          color: #999999;
  
          span {
            color: #333333;
          }
        }
  
        .follow{
          display: flex;
          gap: 15px;
        }
  
      }
    }

    .buttons {
      display: flex;
      flex-direction: column;
      width: 28%;
      gap: 10px;
    }

  }

  section.create-post{
    transition: height 400ms linear;

    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 4vh 2vw;

    margin-bottom: 3vh;

    display: flex;
    flex-direction: column;
    gap: 10px;

    h2 {
      font-family: 'Fira Sans';
      font-weight: 400;
      font-size: 22px;
      color: #282424;

      padding-bottom: 5px;
      border-bottom: 1px solid #808080;
    }

    input, textarea {
      font-weight: 400;
      font-size: 17px;
      font-family: 'Roboto Flex';
      padding: 15px 10px;
      border: none;
      border-bottom: 1px solid #808080;
    }

    .description-input{
      resize: none;
    }

  }

  section.posts-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  button.toggle-create {
    display: flex;
    align-items: center;

    position: fixed;
    bottom: 30px;
    right: 30px;

    border: none;
    border-radius: 150px;
    background-color: #004E98;
    color: white;

    padding: 15px;

    cursor: pointer;
    opacity: 0.4;
    transition: 0.5s;

    font-size: 30px;

    :hover {
      opacity: 0.8;
    }
  }
`;