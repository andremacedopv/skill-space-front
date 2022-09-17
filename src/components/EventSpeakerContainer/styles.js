import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 19px;
  padding: 20px 10px;

  display: flex;
  align-items: center;
  gap: 20px;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 999px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .speaker-text {
    .speaker-name {
      font-weight: 500;
      font-size: 22px;
      color: #282323;
    }

    .speaker-job {
      font-weight: 500;
      font-size: 16px;
      color: #5C5656;
    }

    .speaker-description {
      margin-top: 5px;
      font-weight: 400;
      font-size: 18px;
      color: #5C5656;
    }
  }
`;