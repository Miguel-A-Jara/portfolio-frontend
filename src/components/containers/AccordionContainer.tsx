import { Accordion, AccordionHeader, AccordionBody, Button } from '@material-tailwind/react';
import Link from 'next/link';

import { Edge } from '../../types/IGitHub';
import GitHubLanguageButton from '../buttons/GitHubLanguageButton';
import AccordionMarkdown from '../markdown/AccordionMarkdown';

interface Props {
  idx: number;
  projectData: Edge;
  description: string;
  openedAccordion: number;
  onClick: (value: number) => void;
}

const AccordionContainer = ({ projectData, idx, onClick, openedAccordion, description } : Props) => {  

  const isOpen = openedAccordion === (idx + 1);

  const { url, name, homepageUrl, primaryLanguage } = projectData?.node;

  return (
    <>
      <Accordion 
        className={`${isOpen ? 'dark:bg-secondary-700/50 bg-primary-500/50' : 'dark:bg-secondary-900/50 bg-primary-900/80'} transition-all duration-300 py-0 pb-0 pt-0 backdrop-blur-sm`}
        open={openedAccordion === (idx + 1)}

        icon={<i className={`fa-sharp fa-solid fa-arrow-up w-5 h-5 flex items-center justify-center text-3xl dark:text-secondary-400 text-primary-100
        ${openedAccordion === (idx + 1) ? 'rotate-180' : 'rotate-0'} transition-all duration-300`}/>}
      >
        
        <AccordionHeader 
          className='text-2xl lg:text-5xl font-light lg:font-bold text-start lg:text-center justify-between px-4 sm:px-10 dark:border-secondary-600 border-primary-200 transition-all duration-300'
          onClick={() => onClick(idx + 1)}
        >
          
          <GitHubLanguageButton languageColor={primaryLanguage.color} languageType={primaryLanguage.name} />

          <h2 className='dark:text-secondary-400 text-primary-100 transition-all duration-300'>{ name }</h2>

          <div className='hidden sm:flex ml-auto items-center justify-around gap-4'>
            <Button
              className='items-center justify-center rounded-full bg-black/50 shadow-none hover:shadow-none pointer-events-auto p-2 outline-2 outline dark:outline-secondary-400 outline-primary-200 transition-all duration-300'
              onClick={(e) => e.stopPropagation()}
            >
              <Link href={homepageUrl} target='_blank'>
                <i className='fa-solid fa-globe text-3xl w-8 h-8 dark:text-secondary-400 text-primary-300 transition-all duration-300' />
              </Link>
            </Button>

            <Button
              className='items-center justify-center rounded-full bg-black/50 shadow-none hover:shadow-none pointer-events-auto p-2 outline-2 outline dark:outline-secondary-400 outline-primary-200 transition-all duration-300'
              onClick={(e) => e.stopPropagation()}
            >
              <Link href={url} target='_blank'>
                <i className='fa-brands fa-github text-3xl w-8 h-8 dark:text-secondary-400 text-primary-300 transition-all duration-300' />
              </Link>
            </Button>
          </div>
        </AccordionHeader>
      
        <AccordionBody className='dark:bg-secondary-900/80 bg-primary-900/80 transition-all duration-300 p-0 min-h-[30vh] h-full overflow-y-auto py-8'>
          <div className='mx-4 lg:mx-28'>
            <AccordionMarkdown description={description} />
          </div>
        </AccordionBody>
      </Accordion>
    </>
  )
}

export default AccordionContainer;