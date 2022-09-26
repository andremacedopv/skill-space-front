import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  font-family: 'Roboto Flex';
  padding: 5vh 3vw;

  section.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 3vh;
    
    h1 {
      font-style: normal;
      font-weight: 600;
      font-size: 2.5rem;
      text-align: center;
      color: #333333;
    }

    h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 2rem;
      text-align: center;
      color: #666666;
    }
  }

  section.activity-area {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .tabs::-webkit-scrollbar {
      display: none;
    }
    margin-bottom: 1rem;

    .tabs {
      display: flex;
      margin-bottom: 1rem;
      overflow: scroll;
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
      
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

    .activity-box {
      border: 2px solid #999999;
      border-radius: 15px;
      padding: 1.2rem 1.2rem 0 1.2rem;

      .activity-item{
        display: flex;
        gap: 0.5rem;
        margin-bottom: 1.2rem;
        align-items: center;

        .box-title {
          font-style: normal;
          font-weight: 600;
          font-size: 1.2rem;
          color: #666666
        }

        .box-content {
          font-style: normal;
          font-weight: 600;
          font-size: 1.2rem;
          color: #333333;
        }

        .box-link {
          font-style: normal;
          font-weight: 600;
          font-size: 1.2rem;
          text-decoration: none;
          color: #004E98;
        }.box-link:hover {
          filter: contrast(200%);
        }
      }
    }
  }

  section.bottom-area {
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    .submit-button{
      width: 15rem;
    }

    .grade-section {
      display: flex;
      flex-direction: column;
      width: 15rem;
      justify-content: center;
      align-items: center;

      .grade-title {
        font-size: 1.5rem;
      }

      p {
        font-size: 1.2rem;
      }

      .grade-status {
        color: ${props => props.statusColor? props.statusColor : "#3B7520"};
      }

      .grade-line {
        border-bottom: 2px solid #666666;
        width: 100%;
      }
    }

  }

  section.locked {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;

    h3 {
      font-size: 2rem;
      color: #333333;
    }

    .subtext-locked{
      color: #666666;
      font-size: 1.2rem;
      margin-top: 0.3rem;
      margin-bottom: 2rem;
    }

    .locked-activities-btns{
      display: flex;
      gap: 1rem;
      flex-flow: row wrap;
      justify-content: center;
    }
    
    .requirement-button {
      width: 10rem;
      border: none;
      padding: 1rem;
      background: #004E98;
      border-radius: 8px;
      font-size: 1.2rem;
      color: #fff;
    } .requirement-button:hover {
      background: #003C6E;
      cursor: pointer;
    }
  }


`;