import { Button } from '@material-tailwind/react';
import useScrollPage from '../../hooks/useScrollPage';


interface Props {
  title    : string;
  icon     : string; 
  onClick  : () => void;
}

const ContactMeButtonAction = ({ title, icon, onClick }: Props) => {

  const { isPageScrollable, setIsPageScrollable } = useScrollPage();

  const handleToggle = () => {
    onClick();
    setIsPageScrollable(!isPageScrollable);
  }

  return (
    <Button
      onClick={handleToggle}
      className='dark:bg-secondary-600/10 dark:text-secondary-300 bg-primary-500 text-primary-100 
      p-2 rounded-lg font-bold flex items-center hover:dark:bg-secondary-600/20 hover:bg-primary-500/80 transition-colors duration-300 shadow-none hover:shadow-none capitalize'
    >
      <i className={`${icon} ml-1 mr-3 text-3xl`} />
      <span className='font-sans text-xl'>{title}</span>
    </Button>
  )
}

export default ContactMeButtonAction
