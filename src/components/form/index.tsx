import React from 'react';
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';
import { FormProps } from 'react-router-dom';

type Props<T extends FieldValues> = FormProps & {
  methods: UseFormReturn<T>;
  onSubmit?: FormProps['onSubmit'];
  children: React.ReactNode;
};

function Form<T extends FieldValues>({
  methods,
  children,
  ...formProps
}: Props<T>) {
  return (
    <FormProvider<T> {...methods}>
      <form {...formProps}>{children}</form>
    </FormProvider>
  );
}

export default Form;
