import styled from 'styled-components';

export const Container = styled.div`
  width: 40vw;
  margin: 20px;
  background: #fff;
  border-radius: 10px;
  padding: 40px;

  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  transition: 0.5s box-shadow;

  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 1);
  }

  h1 {
    font-size: 25px;
    font-family: 'Nunito', sans-serif;
    text-align: center;
    color: #148cf1;
  }

  form {
    display: flex;
    flex-direction: column;

    textarea {
      margin: 20px 0px;

      padding: 5px;
      color: #848484;
      font-size: 16px;
      font-family: 'Nunito', sans-serif;

      transition: 0.5s box-shadow;

      &:hover {
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
      }
    }

    button {
      padding: 10px;
      border: none;
      border-radius: 2px;

      font-family: 'Nunito', sans-serif;
      color: #fff;
      background: #148cf1;

      transition: filter 0.2s;
      transition: 0.5s box-shadow;

      &:hover {
        filter: brightness(0.9);
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    form {
      padding: 3px;
      textarea {
        margin: 10px 0px;
      }
    }
  }
`;
