import { Card, Typography } from '@mui/material';
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  title: string;
  children: React.ReactElement;
  link: { label: LinkProps['children']; to: LinkProps['to'] };
};

const AuthFormContainer: React.FC<Props> = ({ title, children, link }) => {
  return (
    <PageContainer>
      <FormContainer>
        <Title>{title}</Title>
        {children}
        <Link to={link.to}>{link.label}</Link>
      </FormContainer>
    </PageContainer>
  );
};
export default AuthFormContainer;

const PageContainer = styled.div`
  margin: auto;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
  align-items: center;
`;

const Title = styled(Typography).attrs(() => ({
  variant: 'h1',
  color: 'primary',
}))`
  font-size: 1.5rem;
  font-weight: 700;
`;
