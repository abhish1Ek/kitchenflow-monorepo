import React from 'react';
import { Formik, FormikConfig } from 'formik';

type TFormProps<T> = FormikConfig<T> & {
  validationSchema: any;
};

const Form = <T extends Object>(props: TFormProps<T>): JSX.Element => {
  const { children } = props;
  return <Formik<T> {...props}>{children}</Formik>;
};

export default Form;
