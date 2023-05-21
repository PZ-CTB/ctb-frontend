import { zodResolver } from '@hookform/resolvers/zod/dist/zod';
import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { postLogin } from 'auth/api';
import { useAuthContext } from 'auth/context';
import { useIsAuthenticated } from 'auth/hooks';
import { LoginForm, LoginFormSchema } from 'auth/schema';
import TextInput from 'components/form/textInput';
import Routes from 'routes';
import { useSnackbars } from 'snackbar';

import { StyledForm } from '../components/form';
import AuthFormContainer from '../components/form/container';
import { getLoginFormDefaultValues } from '../utils';

const LoginPage: React.FC = () => {
  const { signIn } = useAuthContext();
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();
  const location = useLocation();

  const methods = useForm<LoginForm>({
    defaultValues: getLoginFormDefaultValues(),
    reValidateMode: 'onSubmit',
    resolver: zodResolver(LoginFormSchema),
  });

  const link: { label: string; to: string } = {
    label: "Don't have an account? Register here",
    to: Routes.Register(),
  };

  const { handleSubmit } = methods;
  const { enqueueSnackbarError } = useSnackbars();

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await postLogin(data);
      signIn({
        token: response.auth_token,
      });
    } catch (e) {
      enqueueSnackbarError('Login failed');
    }
  });

  useEffect(() => {
    if (isAuthenticated) {
      const redirectUrl = location.state?.from || Routes.Home();
      navigate(redirectUrl, { replace: true });
    }
  }, [isAuthenticated]);

  return (
    <AuthFormContainer title="Sign In" link={link}>
      <StyledForm methods={methods} onSubmit={onSubmit}>
        <TextInput name="email" label="Email" type="email" />
        <TextInput name="password" label="Password" type="password" />
        <LoginButton />
      </StyledForm>
    </AuthFormContainer>
  );
};

export default LoginPage;

const LoginButton = styled(Button).attrs(() => ({
  type: 'submit',
  variant: 'contained',
  children: 'Login',
}))``;
