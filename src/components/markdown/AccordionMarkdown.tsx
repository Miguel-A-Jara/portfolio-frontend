import Image from 'next/image';
import Link  from 'next/link';
import ReactMarkdown from 'react-markdown';

interface Props {
  description: string;
}

const AccordionMarkdown = ({ description }: Props ) => {
  return (
    <ReactMarkdown
      components={{
        h1: props => (
          <h1 
            className='transition-all duration-300 text-5xl my-4 dark:text-secondary-400 text-primary-600 font-bold'
          >
            {props.children}
          </h1>
        ),
        h2: props => (
          <h2 
            className='transition-all font-semibold duration-300 text-3xl my-4 dark:text-secondary-400 text-primary-600 text-start'
          >
            { props.children }
          </h2>
        ),
        h3: props => (
          <h3 
            className='transition-all duration-300 my-4 dark:text-secondary-400 text-primary-600 text-start text-2xl'
          >
            {props.children}
          </h3>
        ),
        a:  props => (
          <Link 
            className='dark:text-secondary-400 underline underline-offset-2' 
            target='_blank' 
            href={props.href || ''}
          >
            {props.children}
          </Link>
        ),
        img: props => (
          <div className='relative h-32 md:h-64 aspect-video mx-auto rounded-lg overflow-hidden'>
            {
              props.src ? <Image
                fill
                className='object-cover'
                src={props.src}
                alt={props.alt || ''}
              />
              : <></>
            }
          </div>
        ),
        p: props => (
          <p className='dark:text-secondary-400 text-primary-600 text-lg text-light text-start my-4 transition-all duration-300'>{props.children}</p>
        ),
        hr: props => <hr className='dark:bg-secondary-400 bg-primary-400/50 h-0.5 border-none my-8 block' />,
        ul: props => <ul className='list-disc'>{props.children}</ul>,
        li: props => <li className='dark:text-secondary-400 text-primary-600 text-start ml-8'>{props.children}</li>,
        em: props => <strong>{props.children}</strong>
      }}
    >
      { description }
    </ReactMarkdown>
  )
}

export default AccordionMarkdown
