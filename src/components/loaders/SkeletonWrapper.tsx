import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

import useDarkMode from '../../hooks/useDarkMode';

interface Props {
  count    ?: number;
  className?: string;
}

const SkeletonWrapper = ({ count, className }: Props) => {

  const { isDarkTheme } = useDarkMode();

  return (
    <>
      <Skeleton 
        enableAnimation 
        className={className}
        count={count}
        baseColor={ isDarkTheme ? '#032233' : '#2fd89c' }
        highlightColor={ isDarkTheme ? '#036686' : '#6aebba' }
      />
    </>
  )
}

export default SkeletonWrapper