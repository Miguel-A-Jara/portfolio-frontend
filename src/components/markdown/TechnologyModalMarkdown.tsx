import ReactMarkdown   from 'react-markdown';
import ITechnologyInfo from '../../types/ITechnologyInfo';
import SkeletonWrapper from '../loaders/SkeletonWrapper';

interface Props {
  data: ITechnologyInfo | undefined;
}

const TechnologyModalMarkdown = ({ data }: Props) => {
  return (
    data?.description
      ? <ReactMarkdown 
          className='pointer-events-auto text-justify md:text-start'
          components={{ 
            a: props => {
              return <a 
                className='font-semibold underline underline-offset-2 dark:text-secondary-400 text-secondary-100
                transition-colors duration-300' 
                href={props.href}
                target='_blank' rel='noreferrer'
                >
                  {props.children}
                </a>
            },
            h3: props => {
              return <h3 className='font-bold text-2xl'>{props.children}</h3>
            }
          }}
        >
          { data.description.replace(/<br \/>/g, '\n &nbsp;') }
        </ReactMarkdown>
      : 
      <>
        <SkeletonWrapper count={3} />
        <br />
        <SkeletonWrapper count={4} />
      </>
  )
}

export default TechnologyModalMarkdown;