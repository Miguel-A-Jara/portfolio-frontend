import { useContext } from 'react';
import Image          from 'next/image';
import TechModal      from '../modals/TechModal';

import { ModalContext }  from '../../context/ModalContext';
import { ITechnologies } from '../../hooks/fetchHooks/useTechnologies';
import useScrollPage from '../../hooks/useScrollPage';

const IMG_PREFIX = process.env.NEXT_PUBLIC_IMG_PREFIX;

const TechnologyButton = (props: ITechnologies) => {

  const { dispatch, isModalOpen } = useContext(ModalContext)
  const { isPageScrollable, setIsPageScrollable } = useScrollPage();

  const handleToggle = () => {

    if(dispatch)
      dispatch({ 
        payload: props.id, 
        type: isModalOpen ? 'CLOSE_MODAL' : 'OPEN_MODAL' 
      })
    setIsPageScrollable(!isPageScrollable);
  }

  return (
    <>
      <button onClick={handleToggle}>
        <div className={`w-32 h-32 flex items-center rounded-lg p-4 relative
        dark:bg-secondary-900 bg-primary-900/50 transition-colors duration-300`}>
          <Image
            src={`${IMG_PREFIX}${props.logo}`}
            width={ props.width }
            height={ props.height }
            alt={ props.alternative_text }
            title={ props.name }
            className='rounded-lg hover:scale-90 transition-transform duration-300'
          />
        </div>
      </button>
      <TechModal
        id={props.id}
        techType={props.technology_type}
      />
    </>
  )
}

export default TechnologyButton