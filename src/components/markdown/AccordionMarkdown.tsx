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
            className='transition-all duration-300 text-4xl font-light my-4 dark:text-secondary-400 text-primary-600'
          >
            {props.children}
          </h1>
        ),
        h2: props => (
          <h2 
            className='transition-all duration-300 mx-8 text-3xl dark:text-secondary-400 text-primary-600 text-start'
          >
            { props.children }
          </h2>
        ),
        h3: props => (
          <h3 
            className='transition-all duration-300 text-xl font-semibold m-4 dark:text-secondary-400 text-primary-600'
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
        )
      }}
    >
      { description }
    </ReactMarkdown>
  )
}

export default AccordionMarkdown
