import Link from 'next/link';

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
      className='dark:bg-secondary-600/10 dark:text-secondary-300 bg-primary-600/10 text-primary-300 
      p-2 rounded-lg font-bold flex items-center'
    >
      <i className={`${icon} mr-2 text-3xl`} />
      <span className='font-sans text-xl'>{title}</span>
    </Link>
  )
}

export default ContactMeButton
