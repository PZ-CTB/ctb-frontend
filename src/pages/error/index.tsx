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
      <div>
        <h1>Oops! You seem to be lost.</h1>
        <Gif />
        <DashboardButton />
      </div>
    </>
  );
};

export default ErrorPage;

const DashboardButton = styled(Button).attrs(() => ({
  variant: 'outlined',
  startIcon: <DashboardIcon />,
  children: 'Go to Dashboard',
  component: Link,
  to: Routes.DashboardUrl(),
}))`
  margin: auto 1rem 1rem 1rem;
`;

const Gif = styled.img.attrs(() => ({
  src: ErrorGif,
}))`
  width: 50%;
  padding: 1rem;
  display: block;
`;
