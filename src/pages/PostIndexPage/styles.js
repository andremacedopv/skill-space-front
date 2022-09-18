import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  font-family: 'Roboto Flex';
  padding: 5vh 3vw;

  section.header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    margin-bottom: 3vh;

    h1 {
      color: #282424;
      font-size: 40px;
      font-weight: 500;
    }

  }

  section.filters{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 5vh;

    h2 {
      font-family: 'Fira Sans';
      font-weight: 400;
      font-size: 25px;
      color: #282424;
    }

    .tags-row {
      display: flex;
      justify-content: space-between;

      .tags {
        display: flex;
        gap: 10px;

        .tag {
          cursor: pointer;
          background-color: #004E98;
          padding: 3px 40px;
          color: white;
          border-radius: 15px;
          transition: 0.5s;

          :hover {
            filter: contrast(200%)
          }
        }
      }

      .see-all {
        display: flex;
        gap: 3px;
        align-items: center;

        cursor: pointer;
        transition: 0.5s;

        :hover {
          filter: contrast(200%)
        }

        .icon {
          font-size: 25px;
        }
      }
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

    .description-input{
      font-weight: 400;
      font-size: 17px;
      font-family: 'Roboto Flex';
      padding: 15px 10px;
      border: none;
      resize: none;

      border-bottom: 1px solid #808080;
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