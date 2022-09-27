import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  gap: 12px;

  font-family: 'Roboto Flex';

  .author-info {
    display: flex;
    align-items: center;
    gap: 10px;

    img{
      object-fit: cover;
      height: 45px;
      width: 45px;
      border-radius: 30px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      cursor: pointer;
    }

    .author-name {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      color: #352F2F;
    }

    .tags {
      display: flex;
      gap: 25px;
      padding-left: 15px;
    }
  }
  
  .post-info {
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 4vh 2vw;

    display: flex;
    flex-direction: column;
    gap: 15px;

    .post-name {
      font-weight: 500;
      font-size: 21px;
    }

    .post-description {
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
    }
  }

  .buttons {
    display: flex;
    gap: 15px;

    button{
      display: flex;
      align-items: center;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;

      transition: 0.4s;

      p {
        font-style: normal;
        font-size: 14px;
        color: #595757;
      }

      .icon {
        font-size: 22px;
        color: #504E4E;
      }
    }

    button:hover{
      filter: contrast(200%);
    }
  }

  .create-comment {
    padding-left: 3vw;
    display: flex;
    align-items: center;
    gap: 10px;

    .description-input {
      width: 100%;
      font-weight: 400;
      font-size: 17px;
      font-family: 'Roboto Flex';
      padding: 15px 10px;
      border: none;
      border-bottom: 1px solid #808080;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 200px;
      padding: 12px;
      height: 50%;
      aspect-ratio: 1 / 1;
      background-color: #004E98;
      border: none;
      cursor: pointer;
      transition: 0.6s;

      .icon {
        color: white;
        font-size: 25px;
      }

      :hover {
        filter: contrast(200%);
      }
    }
  }

  .comments {
    padding-left: 3vw;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
`;