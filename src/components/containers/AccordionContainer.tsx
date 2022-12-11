import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import AccordionMarkdown from '../markdown/AccordionMarkdown';

interface Props {
  idx: number;
  title: string;
  description: string;
  openedAccordion: number;
  onClick: (value: number) => void;
}

const AccordionContainer = ({ description, title, idx, onClick, openedAccordion } : Props) => {  

  const isOpen = openedAccordion === (idx + 1);

  return (
    <>
      <Accordion 
        className={`${isOpen ? 'dark:bg-secondary-700/50 bg-primary-300' : 'dark:bg-secondary-900/50 bg-primary-400'} transition-all duration-300 py-0 pb-0 pt-0`}
        open={openedAccordion === (idx + 1)}

        icon={<i className={`fa-sharp fa-solid fa-arrow-up w-5 h-5 flex items-center justify-center text-3xl dark:text-secondary-400 text-primary-100
        ${openedAccordion === (idx + 1) ? 'rotate-180' : 'rotate-0'} transition-all duration-300`}/>}
      >
        
        <AccordionHeader 
          className='text-2xl lg:text-5xl font-light lg:font-bold text-start lg:text-center justify-between px-10 border-none'
          onClick={() => onClick(idx + 1)}
        >
          <h2 className='dark:text-secondary-400 text-primary-100 transition-all duration-300'>{ title }</h2>
        </AccordionHeader>
      
        <AccordionBody className='dark:bg-secondary-900 bg-primary-200/50 transition-all duration-300 p-0 min-h-[30vh] h-full overflow-y-auto py-8'>
          <AccordionMarkdown description={description} />
        </AccordionBody>
      </Accordion>
    </>
  )
}

export default AccordionContainer;