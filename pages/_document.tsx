import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap' rel='stylesheet'/>
        <script src='https://kit.fontawesome.com/a50da1e470.js' defer crossOrigin='anonymous'></script>
      </Head>
      <body className='dark:bg-secondary-900 bg-primary-100 dark:text-secondary-500 text-black/80
        transition-all duration-300'
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;
