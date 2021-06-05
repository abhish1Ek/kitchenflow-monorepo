import React from 'react';
import { Formik, FormikProps, FormikConfig } from 'formik';

type TFormProps<T> = FormikConfig<T>;

const Form = <T extends Object>(props: TFormProps<T>): JSX.Element => {
  const { children } = props;
  return <Formik<T> {...props}>{children}</Formik>;
};

export default Form;
