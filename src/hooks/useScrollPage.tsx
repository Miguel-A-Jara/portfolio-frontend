import { useEffect, useState } from 'react';

const useScrollPage = () => {
  
  const [isPageScrollable, setIsPageScrollable] = useState(true);

  useEffect(() => {
    
    //Toggle the scroll mode from HTML
    const mainHTML = document.querySelector('html');

    if ( !isPageScrollable ) mainHTML!.style.overflow = 'hidden';
    if ( isPageScrollable ) mainHTML!.style.overflowY = 'visible';

    return () => {
      mainHTML!.style.overflowY = 'visible'
    };

  }, [isPageScrollable]);

  return { isPageScrollable, setIsPageScrollable };

}

export default useScrollPage;
