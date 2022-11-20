import { useEffect, useRef, useState } from 'react';

const useScrollPage = () => {
  
  const isFirstRender = useRef(true);
  const [isPageScrollable, setIsPageScrollable] = useState(true);

  useEffect(() => {
    
    const mainHTML = document.querySelector('html'); //Toggle the scroll mode from HTML
    const scrollBarWidth = window.innerWidth - document.body.clientWidth; //Getting the scrollbar's width

    if(isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if(!isFirstRender.current) {

      mainHTML!.style.overflowY =
        mainHTML?.style.overflowY === 'hidden' ? 'auto' : 'hidden';

      mainHTML!.style.paddingRight =
        mainHTML?.style.overflowY === 'hidden' ? `${scrollBarWidth}px` : '0px';
    }

  }, [isPageScrollable]);

  return { isPageScrollable, setIsPageScrollable };

}

export default useScrollPage;
