import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import PersonalDataContainer from '../../containers/PersonalDataContainer';

import ContactForm from '../../forms/ContactForm';

const ContactMe = () => {

  const [t, i18n] = useTranslation();

  return (
    <div className='min-h-[100vh] flex flex-wrap gap-4 py-10 top-0 z-10 relative
      items-start justify-center px-6 text-center dark:bg-secondary-900 bg-primary-900'
    >

    <motion.h1 
      initial={{ translateX: -100, opacity: 0 }} whileInView={{ translateX: 0, opacity: 1 }} 
      transition={{ duration: 1, delay: 0.3 }}
      className='font-mono font-bold text-5xl lg:text-7xl text-center 
      dark:text-secondary-400 text-primary-400 w-full max-w-3xl'
    >
      { i18n.language === 'en' ? 'Contact Me' : 'Contáctame' }
    </motion.h1>

      <ContactForm />
      <PersonalDataContainer />
      
    </div>
  )
}

export default ContactMe;
