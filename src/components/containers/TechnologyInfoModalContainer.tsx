import SkeletonWrapper         from '../loaders/SkeletonWrapper';
import useTechnologiesInfo     from '../../hooks/fetchHooks/useTechnologiesInfo';
import TechnologyModalMarkdown from '../markdown/TechnologyModalMarkdown';
import TechnologyModalCarrousel from '../carrousel/TechnologyModalCarrousel';

interface Props {
  id      : number;
  techType: string;
}

const TechnologyInfoModalContainer = ({ id, techType }: Props) => {

  const { data, isError, error, isLoading } = useTechnologiesInfo(id, techType);

  return (
    <div className='w-full h-[90vh] lg:h-full flex flex-wrap items-center gap-8 p-8 sm:p-14 relative z-50 overflow-y-auto'>
      <h1 className='text-5xl sm:text-7xl font-semibold text-center w-full mt-auto'>
        { data?.title || <SkeletonWrapper className='min-h-[20px]' /> }
      </h1>

      <div className='mb-auto flex flex-wrap items-center text-xl w-full'>

        <div className='w-full lg:w-1/2 lg:max-w-sm'>
          <TechnologyModalMarkdown data={data} />
        </div>

        <div className='w-full lg:w-1/2 flex items-stretch justify-center pointer-events-auto'>
          {
            (data && data.images.length > 0)
              ? <TechnologyModalCarrousel data={data} /> 
              : <div className='w-full h-48 mt-4 my-8 lg:pl-8'>
                  <SkeletonWrapper className='h-full'/>
                </div>
          }
        </div>
      </div>

    </div>
  )
}

export default TechnologyInfoModalContainer;