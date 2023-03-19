import { zodResolver } from '@hookform/resolvers/zod/dist/zod';
import { Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import TextInput from 'components/textInput';
import Routes from 'routes';

import { StyledForm } from '../components/form';
import AuthFormContainer from '../components/form/container';
import { getRegisterFormDefaultValues } from '../utils';

import { RegisterForm, RegisterFormSchema } from './schema';

const RegisterPage: React.FC = () => {
  const methods = useForm<RegisterForm>({
    defaultValues: getRegisterFormDefaultValues(),
    resolver: zodResolver(RegisterFormSchema),
  });

  const link: { label: string; to: string } = {
    label: 'Already have an account? Click to login',
    to: Routes.LoginUrl(),
  };

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit((data) => {
    // backend request
    console.log(data);
  });

  return (
    <AuthFormContainer title="Sign Up" link={link}>
      <StyledForm methods={methods} onSubmit={onSubmit}>
        <TextInput name="email" label="Email" />
        <TextInput name="password" label="Password" type="password" />
        <TextInput
          name="confirmPassword"
          label="Confirm Password"
          type="password"
        />
        <RegisterButton />
      </StyledForm>
    </AuthFormContainer>
  );
};

export default RegisterPage;

const RegisterButton = styled(Button).attrs(() => ({
  type: 'submit',
  variant: 'contained',
  children: 'Register',
}))``;
