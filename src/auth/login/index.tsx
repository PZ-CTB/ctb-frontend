import { zodResolver } from '@hookform/resolvers/zod/dist/zod';
import { Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import TextInput from 'components/textInput';
import Routes from 'routes';

import { StyledForm } from '../components/form';
import AuthFormContainer from '../components/form/container';
import { getLoginFormDefaultValues } from '../utils';

import { LoginForm, LoginFormSchema } from './schema';

const LoginPage: React.FC = () => {
  const methods = useForm<LoginForm>({
    defaultValues: getLoginFormDefaultValues(),
    reValidateMode: 'onSubmit',
    resolver: zodResolver(LoginFormSchema),
  });

  const link: { label: string; to: string } = {
    label: "Don't have an account? Register here",
    to: Routes.RegisterUrl(),
  };

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit((data) => {
    // backend request
    console.log(data);
  });

  return (
    <AuthFormContainer title="Sign In" link={link}>
      <StyledForm methods={methods} onSubmit={onSubmit}>
        <TextInput name="email" label="Email" />
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
