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

      .tag {
        padding: 4px 8px;
        
        background-color: #F1F451;
        display: inline-block;
        position: relative; 
        
        font-family: 'Fira Sans';
        font-style: normal;
        font-weight: 300;
        font-size: 12px;
        color: #3F3F3F;
      }

      .tag:before {
        color: #F1F451;
        border-right: 15px solid;
        border-top: 11px solid transparent;
        border-bottom: 11px solid transparent;
        content: '';
        position: absolute;
        left: -15px;
        top: 0px;
      }
    }
  }
  

  .post-info {
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 4vh 2vw;

    .post-description {
      font-style: normal;
      font-weight: 400;
      font-size: 17px;
    }
  }
`;