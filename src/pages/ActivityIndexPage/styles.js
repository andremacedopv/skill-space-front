import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  font-family: 'Roboto Flex';
  padding: 5vh 3vw;

  .hover-text {
    position: relative;
  }
  
  .hover-text:before {
    content: attr(dataHover);
    visibility: hidden;
    opacity: 0;
    width: 140px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    padding: 5px 0;
    transition: opacity 1s ease-in-out;
  
    position: absolute;
    z-index: 1;
    left: 0;
    top: 110%;
  }
  
  .hover-text:hover:before {
    opacity: 1;
    visibility: visible;
  }
  

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

    h2 {
      color: #666666;
      font-size: 35px;
      font-weight: 500;
    }
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

  section.not-started-section {
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

    .start-btn {
      max-width: 30rem;
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

    .locked-stages-btns{
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

  section.activities-section{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .stages-tabs::-webkit-scrollbar {
      display: none;
    }

    .activities-tabs {
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

    .search-input {
      width: 15rem;
      margin-left: auto;
      margin-bottom: 1rem;
    }

  }

  .table-container {
    font-size: 1rem;
    border-collapse: separate;
    border-spacing: 0 0rem;

    thead {
      tr {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        text-align: left;
        color: #999999;
        padding: 0.5rem;
        border: 4px solid rgba(255,255,255,.5);
      }
    }

    tbody {
      tr {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        color: #333333;
        font-family: 'Roboto Flex';
        font-style: normal;
        font-weight: 600;

        td .category {
          border: 2px solid #39962A;
          border-radius: 25px;
          text-align: center;
          max-width: 6rem;
          color: #39962A;
        }
        
        .arrow {
          color: #03214A;
          font-size: 1.2rem;
        }

        .exclamation {
          color: #004E98;
        }

        .lock {
          color: #9599a0;
        }
      }

      tr.hide {
        padding: 0.5rem;
        .expandable-cell {
          display: none;
        }
      }

      tr.expand {
        border: 4px solid #666666;
        // border: 4px solid rgba(255,255,255,.5);
        border-radius: 15px;
        padding: 0.5rem;

        border: 4px solid #666666;
        box-shadow:  0px 2px 3px rgba(50, 50, 50, 0.75);
        border-radius: 15px;
        margin-bottom: 1rem;

        td.expandable-cell {
          display: grid;
          grid-column: 1/-1;
          .description-div {
            display: flex;
            flex-direction: row;
            width: 100%;
            margin-top: 1rem;
            justify-content: space-between;
            text-align: justify;

            .btns-expand {
              margin-left: 0.85rem;
            }
          }
        }
      }
    }
  }
`;