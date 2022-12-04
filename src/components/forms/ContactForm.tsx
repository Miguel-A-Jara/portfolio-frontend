import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';


import IContactForm from '../../types/IContactForm';
import contactFormSchema from '../../schemas/contactFormSchema';

import TextInput      from '../input/TextInput';
import TextAreaInput  from '../input/TextAreaInput';
import CaptchaWrapper from '../buttons/CaptchaWrapper';

const ContactForm = () => {

  const [t, i18n] = useTranslation();

  const { register, handleSubmit, formState: { errors }, control } = useForm<Partial<IContactForm>>({
    mode: 'onChange',
    resolver: yupResolver( contactFormSchema )
  });

  const submitForm = () => {
    
  }

  return (
    <form 
      onSubmit={ handleSubmit(submitForm) }
      className='w-full lg:w-1/2 dark:text-secondary-800 text-primary-600
      lg:p-8 rounded-md transition-colors duration-300 flex flex-col gap-8'
    >
      {/* This syntax is a Generic React Component */}
      <TextInput<IContactForm>
        name='name'
        errors={errors}
        register={register}
        placeholder={i18n.language === 'en' ? '* Name' : '* Nombre'}
      />

      <TextInput<IContactForm>
        type='email'
        name='email'
        errors={errors}
        register={register}
        placeholder='* E-mail'
      />

      <TextAreaInput<IContactForm>
        name='message'
        errors={errors}
        register={register}
        placeholder={i18n.language === 'en' ? '* Message' : '* Mensaje'}
      />

      <CaptchaWrapper<IContactForm> 
        control={control}
        register={register}
        name='isGoogleAccepted'
      />

      <button className='bg-secondary-600 p-4 rounded-lg text-3xl'>Send</button>
    </form>
  )
}

export default ContactForm;
