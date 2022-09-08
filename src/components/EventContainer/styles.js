import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  max-height: 120px;

  .date-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 16px;

    background-color: ${props => {
      switch(props.guestStatus){
        case "Maybe": return "#004E98";
        case 'Confirmed': return "#3B7520";
        case 'Declined': return "#752520";
        default: return "#666666"
      } 
    }};

    padding: 10px;
    
    min-width: 100px;

    h1{
      font-size: 60px;
      font-weight: 500;
      color: white;
    }
    h3 {
      font-size: 22px;
      font-weight: 500;
      color: white;
    }
  }
  
  .event-info{
    
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    
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
        margin: 0;
      }

      .event-description{
        color: #514747;
        font-size: 18px;
        font-weight: 400;

        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
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

  @media(max-width: 870px) {
    max-height: none;
    flex-direction: column;
    gap: 5px;
  }

`;