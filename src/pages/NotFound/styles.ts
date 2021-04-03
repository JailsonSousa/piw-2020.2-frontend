/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;

  h1 {
    font-size: 25px;
    font-family: 'Nunito', sans-serif;
    text-align: center;
    color: #fff;

    margin-top: 20px;
  }

  a {
    font-family: 'Nunito', sans-serif;
    font-size: 16px;

    text-align: center;
    color: #fff;

    margin-top: 5px;
  }
`;
