import { ITechnologies } from '../../hooks/fetchHooks/useTechnologies';
import TechnologyButton  from '../buttons/TechnologyButton';

interface Props {
  data: ITechnologies[] | undefined;
  technologyType: 'Backend' | 'Frontend' | 'Other';
}

const TechnologiesContainer = ({ data, technologyType }: Props) => {
  return (
    <div className='w-full lg:w-3/4 lg:p-4 py-4 my-8 flex gap-4 lg:gap-8 flex-wrap items-center justify-around border-b-2
    dark:border-secondary-500 border-primary-400 shadow-2xl dark:shadow-secondary-400/5 shadow-primary-300/5'>
      <h4 className='w-full text-4xl lg:text-6xl font-bold font-mono dark:text-secondary-400 text-primary-400'>
        { technologyType }
      </h4>
      {
        data?.map((technology) => (
          technology.technology_type === technologyType.toLowerCase()
          ? (
            <TechnologyButton
              key={technology.name} 
              { ...technology }
            />
          )
          : null
        ))
      }
    </div>
  )
}

export default TechnologiesContainer