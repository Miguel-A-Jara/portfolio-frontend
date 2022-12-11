import Link from 'next/link';
import { Button } from '@material-tailwind/react';

interface Props {
  link     : string;
  title    : string;
  icon     : string; 
}

const ContactMeButton = ({ link, title, icon }: Props) => {
  return (
    <Link
      href={link}
      target='_blank'
    >
      <Button
        className='dark:bg-secondary-600/10 dark:text-secondary-300 bg-primary-600/30 text-primary-300 
        p-2 rounded-lg font-bold flex items-center hover:dark:bg-secondary-600/20 hover:bg-primary-600/50 transition-colors duration-300 shadow-none hover:shadow-none capitalize w-full'
      >
        <i className={`${icon} mr-2 text-3xl`} />
        <span className='font-sans text-xl'>{title}</span>
      </Button>
    </Link>
  )
}

export default ContactMeButton
