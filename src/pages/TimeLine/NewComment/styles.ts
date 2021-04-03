import styled from 'styled-components';

export const Container = styled.div`
  form {
    display: flex;
    padding: 0px 20px;
    margin-bottom: 20px;

    input {
      width: 100%;
      color: #848484;
      background: #f9f9f9;
      font-size: 14px;
      padding-left: 5px;
      font-family: 'Nunito', sans-serif;
      border: none;
      border-radius: 5px;

      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
      transition: 0.5s box-shadow;

      &:hover {
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 1);
      }
    }

    button {
      padding: 15px;
      margin-left: 10px;
      border: none;
      color: #fff;
      background: #148cf1;
      border-radius: 5px;
      transition: filter 0.2s;
      box-sizing: border-box;
      box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.3);

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
