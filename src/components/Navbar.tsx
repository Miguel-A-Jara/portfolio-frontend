import { useState } from 'react';
import Toggler from './input/Toggler'

const Navbar = () => {

  const [isModeDark, setIsModeDark] = useState(true);

  const toggleOnChange = () => {
    setIsModeDark(prev => !prev);
    //Toggle the dark mode from HTML
    const mainHTML = document.querySelector('html');
    mainHTML?.classList.toggle('dark');
  };

  return (
    <div className='dark:bg-secondary-800 bg-primary-500 p-5 sticky top-0'>
      <h1>Hey</h1>
      <Toggler isActive={isModeDark} onChange={toggleOnChange} />
    </div>
  )
}

export default Navbar
