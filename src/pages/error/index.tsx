import DashboardIcon from '@mui/icons-material/Dashboard';
import Button from '@mui/material/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ErrorGif from 'assets/cat-gato.gif';
import Routes from 'routes';

const ErrorPage: React.FC = () => {
  return (
    <>
      <Container>
        <h1>Oops! You seem to be lost.</h1>
        <Gif />
        <DashboardButton />
      </Container>
    </>
  );
};

export default ErrorPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const DashboardButton = styled(Button).attrs(() => ({
  variant: 'outlined',
  startIcon: <DashboardIcon />,
  children: 'Go to Dashboard',
  component: Link,
  to: Routes.Dashboard(),
}))``;

const Gif = styled.img.attrs(() => ({
  src: ErrorGif,
}))`
  width: 50%;
`;
