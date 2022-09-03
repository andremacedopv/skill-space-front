import styled, { css } from 'styled-components';

export const Container = styled.div`
.progress {
    display: flex;
    flex-direction: column;
    width: 20rem;

    .progress-bar {
      background: #999999;
      border-radius: 20px;
      width: 100%;
      display: block;
      position: relative;

      .semi-completed {
        background: #004E98;
        width: ${props => props.started}%;
        display: block;
        border-radius: 20px;
      }

      .completed{
        background: #03214A;
        border-radius: 20px;
        padding-top: 1.2rem;
        display: block;
        width: ${props => props.completed}%;
      }
    }

    .progress-info {
      font-family: 'Roboto Flex';
      font-style: normal;
      font-weight: 600;
      font-size: 1.2rem;
      display: flex;
      width: 100%;
      justify-content: space-between;
      color: #03214A;
      margin-bottom: 0.5rem;
    }
  }
`;