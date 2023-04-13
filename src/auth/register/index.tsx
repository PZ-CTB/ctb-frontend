import { zodResolver } from '@hookform/resolvers/zod/dist/zod';
import { Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import TextInput from 'components/form/textInput';
import { useSnackbars } from 'components/snackbar';
import Routes from 'routes';

import { postRegister } from '../api';
import { StyledForm } from '../components/form';
import AuthFormContainer from '../components/form/container';
import { RegisterForm, RegisterFormSchema } from '../schema';
import { getRegisterFormDefaultValues } from '../utils';

const RegisterPage: React.FC = () => {
  const methods = useForm<RegisterForm>({
    defaultValues: getRegisterFormDefaultValues(),
    resolver: zodResolver(RegisterFormSchema),
  });

  const link: { label: string; to: string } = {
    label: 'Already have an account? Click to login',
    to: Routes.Login(),
  };

  const { handleSubmit, reset } = methods;
  const { enqueueSnackbarSuccess, enqueueSnackbarError } = useSnackbars();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await postRegister(data);
      enqueueSnackbarSuccess('Registration successful');
      reset();
    } catch (e) {
      enqueueSnackbarError('Registration failed');
    }
  });

  return (
    <AuthFormContainer title="Sign Up" link={link}>
      <StyledForm methods={methods} onSubmit={onSubmit}>
        <TextInput name="email" label="Email" type="email" />
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
