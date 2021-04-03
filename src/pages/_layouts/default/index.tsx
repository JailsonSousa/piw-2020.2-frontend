import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BiUserCircle,
  BiMessageSquareDetail,
  BiNews,
  BiLogOut,
} from 'react-icons/bi';
import { Container, Header, Nav, MenuNav, Content } from './styles';

import { useAuth } from '../../../hooks/auth';

export default function DefaultLayout({ children }: any) {
  const { signOut, user } = useAuth();
  const { pathname } = useLocation();

  return (
    <Container>
      <Header>
        <div>
          <h1>
            <Link to="/">PIW</Link>
          </h1>
          <Nav>
            <MenuNav select={pathname === '/'}>
              <Link to="/">
                <BiMessageSquareDetail size={35} color="#148cf1" />
                <span>Linha do tempo</span>
              </Link>
            </MenuNav>
            <MenuNav select={pathname === '/postar'}>
              <Link to="/postar">
                <BiNews size={35} color="#148cf1" />
                <span>Postar</span>
              </Link>
            </MenuNav>
            <MenuNav>
              <Link to="/login" onClick={signOut}>
                <BiLogOut size={35} color="#148cf1" />
                <span>Sair</span>
              </Link>
            </MenuNav>
            <MenuNav select={pathname === '/perfil'}>
              <Link to="/perfil">
                <BiUserCircle size={35} color="#148cf1" />
                <span>{user.name}</span>
              </Link>
            </MenuNav>
          </Nav>
        </div>
      </Header>
      <Content>{children}</Content>
    </Container>
  );
}
