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
    <button
      onClick={handleToggle}
      className='dark:bg-secondary-600/10 dark:text-secondary-300 bg-primary-600/10 text-primary-300 
      p-2 rounded-lg font-bold flex items-center'
    >
      <i className={`${icon} ml-1 mr-3 text-3xl`} />
      <span className='font-sans text-xl'>{title}</span>
    </button>
  )
}

export default ContactMeButtonAction
