import React from 'react';
import { Formik } from 'formik';

type FormikProps = React.ComponentProps<typeof Formik>;

type TFormProps = FormikProps & {};

const Form = (props: TFormProps): JSX.Element => {
  const { children } = props;
  return <Formik {...props}>{children}</Formik>;
};

export default Form;
