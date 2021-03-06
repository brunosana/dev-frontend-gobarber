import React, {
  createContext, useCallback, useContext, useState,
} from 'react';

import api from '../services/api';

interface signInCredentials{
    email: string;
    password: string;
}

interface AuthContextData{
    user: object;
    signIn(credentials: signInCredentials): Promise<void>;
}

interface AuthState {
    token: string;
    user: object;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBerber:token');
    const user = localStorage.getItem('@GoBerber:user');
    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', { email, password });
    const { token, user } = response.data;
    localStorage.setItem('@GoBerber:token', token);
    localStorage.setItem('@GoBerber:user', JSON.stringify(user));
    setData({ token, user });
  }, []);
  return (

    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
