import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import useGithub from '../../../hooks/fetchHooks/useGithub';
import AccordionContainer from '../../containers/AccordionContainer';

const ProjectsBuilt = () => {

  const [t, i18n] = useTranslation();
  const { data, reposDescriptions } = useGithub();

  return (
    <div className='min-h-[100vh] flex flex-wrap gap-8 py-10 top-0 sticky
      items-start justify-center px-6 text-center dark:bg-secondary-800 bg-primary-500 dark:shadow-secondary-900
      shadow-inner'
    >

    <motion.h1 
      initial={{ translateX: -100, opacity: 0 }} whileInView={{ translateX: 0, opacity: 1 }} 
      transition={{ duration: 1, delay: 0.3 }}
      className='font-mono font-bold text-5xl lg:text-7xl text-center 
      dark:text-secondary-400 text-primary-200 w-full max-w-3xl'
    >
      <span>{ i18n.language === 'en' ? 'My Projects' : 'Mis Proyectos' }</span>
      <i className='fa-solid fa-briefcase ml-4 text-6xl'/>

    </motion.h1>

      <div>
        {
          data?.data.user.pinnedItems.edges.map((item, idx) => (
            <AccordionContainer 
              key={item.node.name} 
              title={item.node.name} 
              description={reposDescriptions[idx] || item.node.description}
            />
          ))
        }
      </div>
    </div>
  )
}

export default ProjectsBuilt;
