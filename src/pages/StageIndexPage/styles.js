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

  .stages-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    align-items: center;
    justify-content: center;
  }

  section.info-area {
    display: flex;
    margin-bottom: 2rem;
    gap: 5rem;
    flex-wrap: wrap;

    .info-item {
      display: flex;
      flex-direction: column;
      font-family: 'Roboto Flex';
      font-style: normal;
      font-weight: 600;

      .info-name {
        color: #999999;
        font-size: 0.9rem;
      }

      .info-value {
        color: #666666;
        font-size: 2rem;
      }
    }
  }

  section.stages-section{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .stages-tabs {
      display: flex;
      margin-bottom: 1rem;
      overflow: scroll;
      
      span {
        font-family: 'Roboto Flex';
        font-style: normal;
        font-weight: 600;
        padding: 0rem 1rem 0.7rem 1rem;
        color: #666666;
        font-size: 1.2rem;    
        cursor: pointer;
        border-bottom: 2px solid #666666;
        white-space: nowrap;
      }

      span:hover {
        filter: contrast(200%);
      }

      span.selected {
        color: #333333;
        font-weight: 500;
        border-bottom: 2px solid #004E98;
      }

      .line {
        border-bottom: 2px solid #666666;
        width: 100%;
      }

    }

    .search-input {
      width: 15rem;
      margin-left: auto;
      margin-bottom: 1rem;
    }

  }

  // @media(max-width: 870px) {
  //   padding: 5vh 6vw;

  //   section.stages-section{
  //     .event-tabs {
  //       gap: 10px;
      
  //       span {
  //         color: #666666;
  //         font-weight: 400;
  //         font-size: 18px;    
  //         cursor: pointer;
  //         transition: 0.4s;
  //       }
  //     }
  //   }
  // }

`;