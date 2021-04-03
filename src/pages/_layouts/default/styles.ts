import styled from 'styled-components';

interface MenuNavProps {
  select?: boolean;
}

export const Container = styled.div`
  min-height: 100%;
  min-width: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #fff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.09);

  div {
    height: 65px;
    width: 70%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0 30px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  h1 {
    text-transform: uppercase;
    cursor: pointer;
    font-family: 'Nunito', sans-serif;
    font-weight: 900;
    text-align: center;

    a {
      color: #148cf1;
      text-decoration: none;
      background: rgba(20, 140, 241, 0.1);
      border-radius: 6px;
      padding: 10px;
    }

    @media (max-width: 768px) {
      a {
        display: none;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 78vh;
  margin-top: 70px;
`;

export const Nav = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
`;

export const MenuNav = styled.li<MenuNavProps>`
  font-size: 12px;
  font-family: 'Nunito', sans-serif;
  text-align: center;
  padding: 10px;
  border-bottom: ${props =>
    props.select ? '2px solid rgba(20, 140, 241, 0.8)' : 'none'};
  border-radius: 1px;
  cursor: pointer;

  transition: 0.3s background;

  &:hover {
    background: rgba(20, 140, 241, 0.1);
    border-radius: 6px;
    padding: 10px;
    border-bottom: none;
  }

  a {
    color: #148cf1;
    text-decoration: none;

    display: flex;
    align-items: center;

    span {
      margin-left: 5px;
      font-weight: 400px;
    }

    @media (max-width: 768px) {
      span {
        font-size: 9px;
      }
    }
  }
`;
