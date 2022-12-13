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

  const { register, handleSubmit, formState: { errors, isValid }, control, reset } = useForm<Partial<IContactForm>>({
    mode: 'onChange',
    resolver: yupResolver( contactFormSchema )
  });

  const submitForm = () => {
    reset();
  }

  return (
    <form 
      onSubmit={ handleSubmit(submitForm) }
      className='w-full dark:text-secondary-800 text-primary-200
      rounded-md transition-colors duration-300 flex flex-wrap justify-between items-end gap-8'
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

      <button 
        disabled={!isValid}
        className={`border-2 px-4 py-2 text-3xl w-min rounded-lg flex gap-2 items-center
        dark:border-secondary-600 border-primary-500 dark:text-secondary-600 text-primary-500 bg-black/90
        transition-all duration-400 ${isValid ? 'opacity-100 shadow-xl' : 'opacity-50 shadow-none'}
        dark:shadow-secondary-600/30 shadow-primary-400/40`}
      >
        { i18n.language === 'en' ? 'Send' : 'Enviar' }
        <i className='fa-solid fa-paper-plane text-2xl' />
      </button>
    </form>
  )
}

export default ContactForm;
