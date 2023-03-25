import { zodResolver } from '@hookform/resolvers/zod/dist/zod';
import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import TextInput from 'components/form/textInput';
import Routes from 'routes';

import { postLogin } from '../api';
import { StyledForm } from '../components/form';
import AuthFormContainer from '../components/form/container';
import { useAuthContext } from '../context';
import { useIsAuthenticated } from '../hooks';
import { LoginForm, LoginFormSchema } from '../schema';
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

  const onSubmit = handleSubmit(async (data) => {
    const response = await postLogin(data);

    signIn({
      token: response.auth_token,
    });
  });

  useEffect(() => {
    if (isAuthenticated) {
      const redirectUrl = location.state?.from || Routes.App();
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
