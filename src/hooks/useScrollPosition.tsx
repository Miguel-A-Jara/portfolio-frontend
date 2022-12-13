import { useEffect, useState } from 'react';

type TPosition = { x: number, y: number };

const useScrollPosition = () => {

  const [position, setPosition] = useState<TPosition>({ x: 0, y: 0 });

  const onScroll = () => {
    const { pageXOffset, pageYOffset } = window;
    setPosition({ x: pageXOffset, y: pageYOffset });
  }

  useEffect(() => {
    
    window.addEventListener('scroll', onScroll);
    
    return () => {
      window.removeEventListener('scroll', onScroll);
    };

  }, []);

  return { ...position };
}

export default useScrollPosition
