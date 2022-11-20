import { useTranslation } from 'react-i18next';

import useTechnologies       from '../../../hooks/fetchHooks/useTechnologies';
import TechnologiesContainer from '../../containers/TechnologiesContainer';

import ErrorModal      from '../../modals/ErrorModal';

const Technologies = () => {

  const [t, i18n] = useTranslation();
  const { data, error, isError } = useTechnologies();

  return (
    <div className='min-h-[100vh] flex flex-col gap-4 top-0 py-10
      items-center justify-center px-6 sticky overflow-hidden text-center bg-black'
    >
      <h3 className='font-bold text-5xl lg:text-7xl text-center dark:text-secondary-400 text-primary-500 w-full max-w-3xl'>
        { t('technologies.title') }
      </h3>

      <TechnologiesContainer data={data} technologyType='Frontend' />
      <TechnologiesContainer data={data} technologyType='Backend' />
      <TechnologiesContainer data={data} technologyType='Other' />
      
      <ErrorModal isError={isError} error={`${error}`} />
    </div>
  )
}

export default Technologies;