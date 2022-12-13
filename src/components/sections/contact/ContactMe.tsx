import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import PersonalDataContainer from '../../containers/PersonalDataContainer';

import ContactForm from '../../forms/ContactForm';

const ContactMe = () => {

  const [t, i18n] = useTranslation();

  return (
    <div className='min-h-[100vh] flex flex-wrap py-10 top-0 relative
      items-start justify-center text-center dark:bg-secondary-900 bg-primary-100'
    >

      <motion.h1 
        initial={{ translateX: -100, opacity: 0 }} whileInView={{ translateX: 0, opacity: 1 }} 
        transition={{ duration: 1, delay: 0.3 }}
        className='font-mono font-bold text-4xl lg:text-7xl text-center
        dark:text-secondary-400 text-primary-600 w-full max-w-3xl'
      >
        { i18n.language === 'en' ? 'Contact Me' : 'Contáctame' }
      </motion.h1>

      <div className='px-4 md:px-0h py-8 w-full max-w-6xl gap-8 flex flex-wrap lg:flex-nowrap justify-between items-start'>
        <ContactForm />
        <PersonalDataContainer />
      </div>
      
    </div>
  )
}

export default ContactMe;
