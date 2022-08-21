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

    margin-bottom: 3vh;

    h1 {
      color: #282424;
      font-size: 40px;
      font-weight: 500;
    }

    .calendar-button {
      border: none;
      background: none;
      
      display: flex;
      align-items: center;
      gap: 10px;

      cursor: pointer;
      color: #4A4A4A;
      transition: 0.7s;

      h2 {
        font-size: 24px;
        font-weight: 500;
      }

      .calendar-icon {
        font-size: 35px;
      }
    }

    .calendar-button:hover {
      filter: brightness(200%);
    }
  }

  section.my-invites{
    margin-bottom: 3vh;

    h2 {
      color: #004E98;
      font-weight: 500;
      font-size: 27px;    
    }
  }

`;