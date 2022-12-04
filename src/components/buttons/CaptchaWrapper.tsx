import ReCAPTCHA from 'react-google-recaptcha';
import { useTranslation } from 'react-i18next';
import { Controller, FieldValues, UseFormRegister, Control } from 'react-hook-form';

interface Props<T> {

  name: keyof T & string; //Parsing the key of T as a string

  register: UseFormRegister<FieldValues>;
  control: Control;
};

const CaptchaWrapper = <T, >({ name, register, control }: Props<T>) => {

  const [t] = useTranslation();

  return (
    <Controller
      {...register(name)}
      control={control}
      render={({ field, fieldState }) => (
        <div className='overflow-x-hidden'>
          <ReCAPTCHA 
            sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY as string}
            onChange={field.onChange}
            theme='light'
          />
          <span className='block text-red-500 font-bold text-xl text-start'>
            { fieldState.error?.message && t(fieldState.error?.message ) }
          </span> 
        </div> 
      )}
    />
  )
}

export default CaptchaWrapper;
