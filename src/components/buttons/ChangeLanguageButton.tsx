import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import enLogo from '../../../public/usa-logo.png';
import esLogo from '../../../public/spanish-logo.png';


const ChangeLanguageButton = () => {

  const [t, i18n] = useTranslation('translation');

  return (
    <div className='bg-black/25 flex rounded-2xl overflow-hidden w-full min-h-[40px]'>
      <button 
        className={
          `w-full py-2 flex items-center justify-center transition-all duration-300
          ${i18n.language === 'en' && 'dark:bg-secondary-600 bg-primary-300'}`
        }
        onClick={() => {i18n.changeLanguage('en')}}
        >
        <Image width={30} height={30} src={enLogo} alt='EN' />
      </button>
      <button 
        className={
          `w-full py-2 flex items-center justify-center transition-all duration-300
          ${i18n.language === 'es' && 'dark:bg-secondary-600 bg-primary-300'}`
        }
        onClick={() => {i18n.changeLanguage('es')}}
      >
        <Image width={30} height={30} src={esLogo} alt='EN' />
      </button>
    </div>
  )
}

export default ChangeLanguageButton