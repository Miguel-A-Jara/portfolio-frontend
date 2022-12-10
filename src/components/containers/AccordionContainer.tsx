import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

interface Props {
  title: string;
  description: string;
}

const AccordionContainer = ({ description, title } : Props) => {

  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  }

  return (
    <div className='overflow-hidden rounded-lg'>
      <h3 className='dark:bg-secondary-900/50 text-5xl font-bold p-2' onClick={toggleAccordion}>{ title }</h3>
      
      <div className={`${ isAccordionOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0' } 
      origin-top transition-all duration-300 p-2 font-light
      dark:bg-secondary-900/70`}>
        <ReactMarkdown>
          { description }
        </ReactMarkdown>
      </div> 
    </div>
  )
}

export default AccordionContainer;