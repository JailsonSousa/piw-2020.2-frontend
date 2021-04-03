import React from 'react';

import { Container, Content } from './styles';

export default function AuthLayout({ children }: any) {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
}
