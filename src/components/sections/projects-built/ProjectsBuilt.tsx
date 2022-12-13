import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import useGithub from '../../../hooks/fetchHooks/useGithub';
import useWindowSize from '../../../hooks/useWindowSize';
import AccordionContainer from '../../containers/AccordionContainer';

import MySphere        from '../../three-models/Sphere';
import PrismaDynamic   from '../../three-models/PrismaDynamic';
import CanvasContainer from '../../three-models/CanvasContainer';


const ProjectsBuilt = () => {

  const [t, i18n] = useTranslation();
  const { data, reposDescriptions } = useGithub();
  const [isAccordionOpen, setIsAccordionOpen] = useState(1);
  const { width } = useWindowSize();

  const toggleAccordion = (value: number) => {
    setIsAccordionOpen(isAccordionOpen === value ? 0 : value);
  }

  return (
    <div className='min-h-[100vh] flex flex-wrap gap-8 py-10 top-0 relative
      items-start justify-center px-6 text-center dark:bg-secondary-800 bg-primary-500 dark:shadow-secondary-900
      shadow-inner overflow-x-hidden overflow-y-hidden'
    >

    <motion.h1 
      initial={{ translateX: -100, opacity: 0 }} whileInView={{ translateX: 0, opacity: 1 }} 
      transition={{ duration: 1, delay: 0.3 }}
      className='font-mono font-bold text-4xl lg:text-7xl text-center 
      dark:text-secondary-400 text-primary-100 w-full max-w-3xl'
    >
      <span>{ i18n.language === 'en' ? 'My Projects' : 'Mis Proyectos' }</span>
      <i className='fa-solid fa-briefcase ml-4 text-4xl lg:text-6xl'/>

    </motion.h1>

      <div className='max-w-6xl rounded-lg overflow-hidden shadow-inner shadow-black z-10'>
        {
          data?.data.user.pinnedItems.edges.map((item, idx) => (
            <AccordionContainer 
              idx={idx}
              projectData={item}
              key={item.node.name} 
              onClick={toggleAccordion}
              openedAccordion={isAccordionOpen}
              description={reposDescriptions[idx] || item.node.description}
            />
          ))
        }
      </div>

      <CanvasContainer className='absolute h-96 -left-32 top-1/2 -translate-y-1/2'>
        <MySphere quality={width < 768 ? 6 : 8} scale={3} />
      </CanvasContainer>

      <CanvasContainer className='absolute w-64 h-64 bottom-0 left-[calc(100%-10em)] lg:-right-20
        -rotate-12 opacity-60 lg:top-1/2'>
        <PrismaDynamic />
      </CanvasContainer>

    </div>
  )
}

export default ProjectsBuilt;
