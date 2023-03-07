import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { Button, TextField, TextFieldProps } from '@mui/material'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

import Form from 'components/form'

import { LoginForm, LoginFormSchema } from './schema'

const LoginPage: React.FC = () => {
  const methods = useForm<LoginForm>({
    reValidateMode: 'onSubmit',
    resolver: yupResolver(LoginFormSchema),
  })

  const { handleSubmit } = methods

  const onSubmit = handleSubmit((data) => {
    // backend request
    console.log(data)
  })

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <TextInput name="email" label="Email" />
      <Button>Submit</Button>
    </Form>
  )
}

type Props = TextFieldProps & {
  name: string
  label: string
}

function TextInput(props: Props) {
  const { name, label, ...textFieldProps } = props

  return (
    <Controller
      name={name}
      render={({ field: { onChange, value } }) => (
        <TextField
          onChange={onChange}
          value={value}
          label={label}
          {...textFieldProps}
        />
      )}
    />
  )
}

export default LoginPage
