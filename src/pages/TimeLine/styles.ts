import styled from 'styled-components';

export const Container = styled.div`
  width: 50vw;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const ContainerPost = styled.div`
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  margin: 10px;
`;

export const ContainerComments = styled.div`
  margin: 0 auto;
  height: 100px;
  padding: 15px;
  margin: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  transition: 0.5s box-shadow;

  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 1);
  }

  overflow: auto;

  strong {
    font-size: 14px;
    font-family: 'Nunito', sans-serif;
  }

  span {
    font-size: 12px;
    font-family: 'Nunito', sans-serif;
  }

  @media (max-width: 768px) {
    strong {
      font-size: 10.5px;
    }

    span {
      font-size: 10px;
    }
  }
`;

export const Comment = styled.p``;

export const LoadingMessage = styled.h1`
  font-size: 25px;
  font-family: 'Nunito', sans-serif;
  text-align: center;
  color: #fff;

  margin-top: 50px;
`;

export const NoDataMessage = styled.h1`
  width: 100%;
  font-size: 25px;
  font-family: 'Nunito', sans-serif;
  text-align: center;
  color: #fff;

  margin-top: 50px;
`;
