import React, { createContext, useCallback, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../services/api';

interface SignInCredentials {
  email: string;
  password: string;
}

interface SignUpCredentials {
  name: string;
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: UserProps;
}

export interface UserProps {
  id?: string;
  name: string;
  email: string;
}

interface AuthContextData {
  token: string;
  user: UserProps;
  signIn(credentialsSignIn: SignInCredentials): Promise<UserProps>;
  signUp(credentialsSignUp: SignUpCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }: any) => {
  const history = useHistory();
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@piw:token');
    const user = localStorage.getItem('@piw:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    try {
      const response = await api.post('/api/sessions/login', {
        email,
        password,
      });

      const { token, user } = response.data;

      localStorage.setItem('@piw:token', token);
      localStorage.setItem('@piw:user', JSON.stringify(user));

      setData({ token, user });

      toast.success('Login realizado com sucesso.', {
        autoClose: 2500,
      });

      return response.data.user;
    } catch (error) {
      return toast.error('Ops, Ocorreu um erro.');
    }
  }, []);

  const signOut = useCallback(() => {
    try {
      localStorage.removeItem('@piw:token');
      localStorage.removeItem('@piw:user');

      toast.success('Logout realizado com sucesso.', {
        autoClose: 2500,
      });

      setData({} as AuthState);
    } catch (error) {
      toast.error('Ops, Ocorreu um erro.');
    }
  }, []);

  const signUp = useCallback(
    async ({ name, email, password }: SignUpCredentials) => {
      try {
        await api.post('/api/users/', {
          name,
          email,
          password,
        });

        toast.success('Conta criada com sucesso.', {
          onClose: () => history.push('/login'),
          autoClose: 2500,
        });
      } catch (error) {
        toast.error('Ops, Ocorreu um erro.');
      }
    },
    [history],
  );

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        signUp,
        token: data.token,
        user: data.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
