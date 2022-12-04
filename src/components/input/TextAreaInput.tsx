import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface Props<T> {

  type?: string;
  name: keyof T & string; //Parsing the key of T as a string
  placeholder: string;

  errors: FieldErrors;
  register: UseFormRegister<FieldValues>;

};

const TextAreaInput = <T, >({ register, name, placeholder, errors, type}: Props<T>) => {

  const [t] = useTranslation();
  const error = errors[name]?.message;

  return (
    <div className='flex flex-col gap-2'>
      <textarea
        autoComplete='off'
        {...register(name)}
        placeholder={placeholder}
        rows={5}
        className='text-2xl p-4 font-semibold rounded-md resize-none opacity-80 transition-all duration-300 
        dark:bg-secondary-800/60 bg-primary-400/60 dark:text-secondary-400 text-primary-800 
        focus:outline-0 placeholder:dark:text-secondary-500 placeholder:text-primary-600 
        placeholder:capitalize focus:opacity-100'
      />

      <span className='block text-red-500 font-bold text-xl text-start'>
        { t(error as string) }
      </span> 
    </div>
  )
}

export default TextAreaInput;
