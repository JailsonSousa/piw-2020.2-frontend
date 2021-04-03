import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 18px;
    font-family: 'Nunito', sans-serif;
    text-align: center;
    color: #148cf1;
  }

  p {
    margin-top: 10px;
    font-size: 14px;
    font-family: 'Nunito', sans-serif;
    text-align: center;
    color: #848484;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    label:first-child {
      margin-top: 30px;
    }

    input {
      margin: 10px 0px;
      padding: 5px;
      color: #848484;
      font-size: 16px;
      font-family: 'Nunito', sans-serif;
    }

    button {
      padding: 10px;
      margin-top: 20px;
      border: none;
      border-radius: 2px;

      font-family: 'Nunito', sans-serif;
      color: #fff;
      background: #148cf1;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }

  a {
    margin-top: 10px;
  }
`;
