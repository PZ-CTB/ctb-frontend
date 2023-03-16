import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

import Form from 'components/form';
import TextInput from 'components/textInput';

import { LoginForm, LoginFormSchema } from './schema';
import { getLoginFormDefaultValues } from './utils';

const LoginPage: React.FC = () => {
  const methods = useForm<LoginForm>({
    defaultValues: getLoginFormDefaultValues(),
    reValidateMode: 'onSubmit',
    resolver: zodResolver(LoginFormSchema),
  });

  const { handleSubmit } = methods;

  const onSubmit = handleSubmit((data) => {
    // backend request
    console.log(data);
  });

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <TextInput name="email" label="Email" />
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default LoginPage;
