import { useEffect, useState } from 'react';

const useScrollPage = () => {
  
  const [isPageScrollable, setIsPageScrollable] = useState(true);

  useEffect(() => {
    
    //Toggle the scroll mode from HTML
    const mainHTML = document.querySelector('html');
    if ( !isPageScrollable ) mainHTML!.style.overflow = 'hidden';
    if ( isPageScrollable ) mainHTML!.style.overflowY = 'scroll';

    return () => {
      mainHTML!.style.overflowY = 'scroll'
    };

  }, [isPageScrollable]);

  return { isPageScrollable, setIsPageScrollable };

}

export default useScrollPage;
