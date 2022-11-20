import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

import useDarkMode from '../../hooks/useDarkMode';

interface Props {
  count    ?: number;
  minHeight?: number;
}

const SkeletonWrapper = ({ count, minHeight }: Props) => {

  const { isDarkTheme } = useDarkMode();

  return (
    <>
      <Skeleton 
        enableAnimation 
        className={`min-h-[${minHeight}px]`}
        count={count}
        baseColor={ isDarkTheme ? '#032233' : '#2fd89c' }
        highlightColor={ isDarkTheme ? '#036686' : '#6aebba' }
      />
    </>
  )
}

export default SkeletonWrapper