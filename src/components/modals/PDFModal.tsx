import { motion } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';

import useScrollPage from '../../hooks/useScrollPage';
import downloadFile  from '../../utils/downloadFile';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface Props {
  URL    : string | undefined;
  PDFname: string | undefined;
  onClick: () => void;
}

const URL_PREFIX = process.env.NEXT_PUBLIC_IMG_PREFIX;

const PDFModal = ({ URL, onClick, PDFname }: Props) => {

  const PDF_URL = `${URL_PREFIX}${URL}`;
  const { isPageScrollable, setIsPageScrollable } = useScrollPage();

  const handleToggle = () => {
    onClick();
    setIsPageScrollable(!isPageScrollable);
  }

  const handleDownload = () => {
    downloadFile(PDF_URL, PDFname, '.pdf');
  }

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }} 
      transition={{ duration: 0.3 }}
      className='fixed inset-0 flex flex-wrap justify-center items-center mb-16 lg:mb-0'
    >
      <div onClick={handleToggle} 
        className='fixed inset-0 bg-black/80 backdrop-blur flex justify-center items-center'
      />

      <div
        className='min-w-[30%] h-full md:h-[90%] dark:bg-secondary-800/70 bg-primary-400/70 rounded-lg
        transition-colors duration-300 z-10'
      >
        <button 
          className='lg:hidden w-full flex justify-center items-center gap-5 p-2 text-3xl shadow-md
          dark:text-secondary-500 text-primary-400 transition-all duration-300 filter-none bg-black/30'
          onClick={handleToggle}>
          <i className='fa-sharp fa-solid fa-xmark' />
        </button>

        <div className='relative flex flex-row-reverse'>
          <button onClick={handleDownload} className='fixed z-10 p-4 dark:bg-secondary-900 dark:text-secondary-500
          bg-primary-300 text-primary-700 rounded-full w-12 h-12 mt-4 mr-4
          flex items-center justify-center transition-colors duration-300'>
            <i className='fa-solid fa-file-arrow-down text-2xl'/>
          </button>
        </div>
        <Document file={PDF_URL} className='overflow-auto h-full'>
          <Page
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
    </motion.div>
  )
}

export default PDFModal;
