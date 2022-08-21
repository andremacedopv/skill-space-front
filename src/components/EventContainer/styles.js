import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 20px;

  .date-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 16px;

    background-color: #004E98;
    padding: 0.6vw;

    min-height: 130px;
    min-width: 130px;

    h1{
      font-size: 75px;
      font-weight: 500;
      color: white;
    }
    h3 {
      font-size: 24px;
      font-weight: 500;
      color: white;
    }
  }
  
  .event-info{
    
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: space-between;
    
    background-color: #E4E4E4;
    border-radius: 16px;
    padding: 1vw 2vw;

    .event-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
  
      gap: 5px;
      
      .event-title{
        color: #282323;
        font-size: 30px;
        font-weight: 500;
      }

      .event-description{
        color: #514747;
        font-size: 18px;
        font-weight: 400;
      }

      .info-row{
        display: flex;
        gap: 40px;

        p {
          font-weight: 500;
          font-size: 17px;
          color: #282323;

          span {
            font-weight: 400;
            font-size: 17px;
            color: #514747;
          }
        }

      }
    }

    .more-info{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 5px;

      cursor: pointer;

      .plus-icon {
        font-size: 32px;
      }

      p {
        font-weight: 500;
        font-size: 15px;
        white-space: nowrap;
      }
    }
  }

`;