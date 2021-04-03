import React from 'react';

import { AuthProvider } from './auth';
import { PostProvider } from './post';

export const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <PostProvider>{children}</PostProvider>
  </AuthProvider>
);
