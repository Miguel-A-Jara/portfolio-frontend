import * as yup from 'yup';
import IContactForm from '../types/IContactForm';

type TSchema = Record<keyof IContactForm, yup.AnySchema>;

const validateCaptcha = (value: string | undefined | null): boolean => {
  if(!value) return false;
  return true;
}

const validateSqlInjection = (value: string | undefined): boolean => {
  if(value) return !value.toLowerCase().includes('delete * from');
  else return true;
};

const contactFormSchema = yup.object<TSchema>({
  name: yup
    .string()
    .required('contactValidation.name.req')
    .min(3, 'contactValidation.name.min')
    .max(30, 'contactValidation.name.max'),

  email: yup
    .string()
    .email('contactValidation.email.val')
    .required('contactValidation.email.req')
    .min(5, 'contactValidation.email.min')
    .max(50, 'contactValidation.email.max'),

  isGoogleAccepted: yup
    .string()
    .nullable()
    .required('contactValidation.isGoogleAccepted')
    .test('goolge-captcha', 'contactValidation.isGoogleAccepted', validateCaptcha),

  message: yup
    .string()
    .required('contactValidation.message.req')
    .min(5, 'contactValidation.message.min')
    .max(50, 'contactValidation.message.max')
    .test('SQL_INJECTION', 'contactValidation.message.val', validateSqlInjection),
});

export default contactFormSchema;