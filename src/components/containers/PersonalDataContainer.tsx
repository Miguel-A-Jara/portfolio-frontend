import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';

import PDFModal      from '../modals/PDFModal';
import ClockTime     from '../loaders/ClockTime';
import useScrollPage from '../../hooks/useScrollPage';

import ContactMeButton  from '../buttons/ContactMeButton';
import { ModalContext } from '../../context/ModalContext';
import ContactMeButtonAction from '../buttons/ContactMeButtonAction';
import useWebsiteConfigurations from '../../hooks/fetchHooks/useWebsiteConfigurations';

const PersonalDataContainer = () => {
  
  const [t, i18n] = useTranslation();
  const { data } = useWebsiteConfigurations();
  const { dispatch, isModalOpen, modalId } = useContext(ModalContext);
  const { isPageScrollable, setIsPageScrollable } = useScrollPage();

  const handleToggle = () => {
    if(dispatch)
      dispatch({ type: isModalOpen ? 'CLOSE_MODAL' : 'OPEN_MODAL', payload: 'CV_PDF' });
    setIsPageScrollable(!isPageScrollable);
  }

  return (
    <>
      <div 
        className='flex gap-2 flex-wrap border-2 p-4 sm:rounded-lg transition-colors duration-300 max-w-sm
       dark:border-secondary-500 border-primary-400 dark:text-secondary-400 text-primary-300
      dark:bg-black/40 bg-black/70'>

        <h4 className='font-light text-2xl text-start'>
          {i18n.language === 'en' ? 'Time in my country (Paraguay):' : 'La hora en mi país (Paraguay):'}
        </h4>

        <ClockTime />
        <span className='font-light text-center block w-full'>
        {i18n.language === 'en' 
          ? 'Available from 08:00am to 08:00pm.' 
          : 'Disponible de 08:00am a 08:00pm.'
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
            onClick={handleToggle}
            icon='fa-solid fa-file'
            title={i18n.language === 'en' ? 'Resume' : 'CV'}
          />

        </div>

        <AnimatePresence>
          {
            (isModalOpen && modalId === 'CV_PDF') && 
            <PDFModal onClick={handleToggle} URL={data?.cv_url} PDFname={data?.cv_title} />
          }
        </AnimatePresence>
      </div>
    </>
  )
}

export default PersonalDataContainer;
