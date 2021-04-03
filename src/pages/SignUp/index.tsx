import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import { useAuth } from '../../hooks/auth';

const SignIn: React.FC = () => {
  const { signUp } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = useCallback(
    async e => {
      e.preventDefault();
      setLoading(true);

      await signUp({ name, email, password });

      setLoading(false);
    },
    [signUp, name, email, password],
  );

  return (
    <Container>
      <h1>Rede Social PIW</h1>
      <p>Preencha os campos abaixo para criar sua conta</p>
      <form onSubmit={handleSignUp}>
        <label htmlFor="name">Nome</label>
        <input
          placeholder="Informe o seu nome"
          required
          value={name}
          onChange={e => setName(e.currentTarget.value)}
          type="text"
          id="name"
        />

        <label htmlFor="email">Email</label>
        <input
          placeholder="Informe o seu email"
          required
          value={email}
          onChange={e => setEmail(e.currentTarget.value)}
          type="email"
          id="email"
        />

        <label htmlFor="password">Senha</label>
        <input
          placeholder="Informe sua senha secreta"
          required
          value={password}
          onChange={e => setPassword(e.currentTarget.value)}
          type="password"
          id="password"
        />

        <button type="submit" disabled={loading}>
          Cadastrar
        </button>
      </form>
      {!loading && <Link to="/login">Já tenho conta</Link>}
    </Container>
  );
};

export default SignIn;
