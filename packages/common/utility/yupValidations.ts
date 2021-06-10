import * as Yup from 'yup';
import REGEX from './regex';

const YupValidations = {
  date: (message: string = 'Not a valid date') =>
    Yup.string().trim().matches(REGEX.DATE_DDMMYYYY, message),
  phone: (message: string = 'Invalid phone') =>
    Yup.string().matches(/^[6-9]\d{9}$/, {
      message,
      excludeEmptyString: false,
    }),
  email: (message: string = 'Invalid email') => Yup.string().email(message),
  password: (message: string = 'Invalid password') =>
    Yup.string().min(8, 'Too short').required(message),
};

export default YupValidations;
