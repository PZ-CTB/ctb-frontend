import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { PropsWithoutRef, ReactNode, useState } from 'react'
import {
  FormProvider,
  useForm,
  UseFormProps,
  ValidationMode,
} from 'react-hook-form'
import styled from 'styled-components'
import * as y from 'yup'

export interface FormProps<S extends y.AnyObjectSchema>
  extends Omit<
    PropsWithoutRef<JSX.IntrinsicElements['form']>,
    'onSubmit' | 'children'
  > {
  children?: ReactNode
  schema?: S
  onSubmit: (values: y.Asserts<S>) => Promise<void>
  initialValues?: UseFormProps<y.Asserts<S>>['defaultValues']
  validationMode?: keyof ValidationMode
}

export function Form<S extends y.AnyObjectSchema>({
  children,
  schema,
  initialValues,
  onSubmit,
  validationMode,
  ...props
}: FormProps<S>) {
  const ctx = useForm<y.Asserts<S>>({
    mode: validationMode || 'onBlur',
    resolver: schema ? yupResolver(schema) : undefined,
    defaultValues: initialValues,
  })

  const [formErrors, setFormErrors] = useState<string[]>([])

  const handleSubmit = async () => {
    try {
      await onSubmit(ctx.getValues())
    } catch (err) {
      if (axios.isAxiosError(err)) {
        handleServerErrors()
      } else {
        setFormErrors([
          (err instanceof Error && err?.message) || 'An error has occurred.',
        ])
      }
    }
  }

  const handleServerErrors = () => {
    setFormErrors(['Server error.'])
  }

  const handleInvalidForm = () => {
    setFormErrors(['There was a problem. Please see errors above.'])
  }

  return (
    <FormProvider {...ctx}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          ctx.handleSubmit(handleSubmit, handleInvalidForm)()
        }}
        className="form"
        noValidate // disable browser validation
        {...props}
      >
        {children}

        {!!formErrors.length && (
          <StyledErrorList role="alert">
            {formErrors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </StyledErrorList>
        )}
      </form>
    </FormProvider>
  )
}

const StyledErrorList = styled.ul`
  margin: ${(props) => props.theme.spacing(0.8, 0, 1.5, 0)};
  color: ${(props) => props.theme.palette.error.main};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export default Form
