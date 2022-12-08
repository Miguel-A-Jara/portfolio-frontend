import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

import PDFModal  from '../modals/PDFModal';
import ClockTime from '../loaders/ClockTime';

import ContactMeButton from '../buttons/ContactMeButton';
import ContactMeButtonAction from '../buttons/ContactMeButtonAction';
import useWebsiteConfigurations from '../../hooks/fetchHooks/useWebsiteConfigurations';

const PersonalDataContainer = () => {
  
  const [t, i18n] = useTranslation();
  const { data } = useWebsiteConfigurations();
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  const toggleCVModal = () => {
    setIsCVModalOpen(!isCVModalOpen);
  };

  return (
    <>
      <div 
        className='flex flex-1 gap-2 flex-wrap border-2 p-4 rounded-lg transition-colors duration-300 max-w-sm
       dark:border-secondary-500 border-primary-400 dark:text-secondary-400 text-primary-400 bg-black/60'
      >

        <h4 className='font-light text-2xl text-start'>
          {i18n.language === 'en' ? 'Time in my country (Paraguay):' : 'La hora en mi país (Paraguay):'}
        </h4>

        <ClockTime />
        <span className='font-light text-center block w-full'>
        {i18n.language === 'en' 
          ? 'Available from 08:00am to 08:00pm.' 
          : 'Disponible desde las 08:00am hasta las 08:00pm.'
        }
        </span>

        <div className='flex flex-col gap-4 mx-auto py-2'>
          <ContactMeButton
            title='WhatsApp'
            icon='fa-brands fa-whatsapp'
            link='https://api.whatsapp.com/send?phone=0971504950'
          />

          <ContactMeButton
            title='Telegram'
            icon='fa-brands fa-telegram'
            link='https://t.me/mrmaik15'
          />

          <ContactMeButtonAction 
            onClick={toggleCVModal}
            icon='fa-solid fa-file'
            title={i18n.language === 'en' ? 'Resume' : 'CV'}
          />

        </div>

        <AnimatePresence>
          {isCVModalOpen && <PDFModal onClick={toggleCVModal} URL={data?.cv_url} PDFname={data?.cv_title} />}
        </AnimatePresence>
      </div>
    </>
  )
}

export default PersonalDataContainer;
