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

  section.posts-section {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;