import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  margin: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);
  transition: 0.5s box-shadow;

  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 1);
  }
`;

export const PostHeader = styled.div`
  height: 50px;

  display: flex;
  flex-direction: row;
  align-items: center;

  strong {
    margin-left: 10px;
    font-size: 18px;
    text-transform: uppercase;
    color: #848484;
  }

  @media (max-width: 768px) {
    strong {
      font-size: 14px;
    }
  }
`;

export const PostMessage = styled.div`
  height: 140px;
  padding: 10px;
  margin: 10px 0px;

  background: rgba(0, 0, 0, 0.05);
  border-radius: 10px;

  p {
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
    text-align: justify;
  }

  @media (max-width: 768px) {
    p {
      font-size: 10px;
    }
  }
`;

export const PostFooter = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 4px 5px;

  > div {
    display: flex;
    align-items: center;

    svg {
      margin-left: 5px;
    }

    span {
      font-family: 'Nunito', sans-serif;
      font-size: 14px;
    }
  }
`;

export const LikeButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;

  font-family: 'Nunito', sans-serif;
  font-size: 14px;

  color: #fff;
  background: #148cf1;
  border: none;
  cursor: pointer;
  transition: 0.3s background;

  &:hover {
    background: ${lighten(0.06, '#148cf1')};
  }
  svg {
    margin-right: 10px;
  }
`;
