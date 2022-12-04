import ContactForm from '../../forms/ContactForm';

const ContactMe = () => {
  return (
    <div className='min-h-[100vh] flex flex-col gap-4 py-10 top-0 z-10 relative
      items-center justify-center px-6 text-center dark:bg-secondary-900 bg-primary-200'
    >
      <ContactForm />
    </div>
  )
}

export default ContactMe;
