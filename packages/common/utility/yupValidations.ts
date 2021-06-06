import * as Yup from 'yup';
import REGEX from './regex';

const YupValidations = {
  date: (message: string = 'Not a valid date') =>
    Yup.string().trim().matches(REGEX.DATE_DDMMYYYY, message),
};

export default YupValidations;
