import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';

import { useAuth } from '../../hooks/auth';

const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignIn = useCallback(
    async e => {
      e.preventDefault();
      setLoading(true);
      await signIn({ email, password });
      setLoading(false);
    },
    [signIn, email, password],
  );

  return (
    <Container>
      <h1>Rede Social PIW</h1>
      <p>Preencha os campos abaixo para realizar o login</p>
      <form onSubmit={handleSignIn}>
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
          Entrar
        </button>
      </form>
      {!loading && <Link to="/cadastro">Criar conta</Link>}
    </Container>
  );
};

export default SignIn;
