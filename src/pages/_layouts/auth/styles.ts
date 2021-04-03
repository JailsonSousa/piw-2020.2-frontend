import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100vh;
  width: 100vw;

  img {
    margin-top: -30px;
    margin-bottom: 8px;
    width: 9vw;
    height: 18vh;
  }
`;

export const Content = styled.div`
  width: 319px;

  background: #ffffff;
  border: 2px solid #ffffff;
  box-sizing: border-box;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.5);
  border-radius: 5px;

  padding: 24px 32px;
`;
