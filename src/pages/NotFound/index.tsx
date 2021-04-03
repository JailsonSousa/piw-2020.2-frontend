import React from 'react';
import { BiXCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Container } from './styles';

const NotFound: React.FC = () => {
  return (
    <Container>
      <BiXCircle size={50} color="#fff" />
      <h1>PAGE NOT FOUND</h1>

      <Link to="/">Ir para pagina inicial</Link>
    </Container>
  );
};

export default NotFound;
