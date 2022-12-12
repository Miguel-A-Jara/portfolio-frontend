import { useRef } from 'react';
import Image from 'next/image';

import { Button } from '@material-tailwind/react';

import SwiperCore from 'swiper';
import { Pagination, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import ITechnologyInfo from '../../types/ITechnologyInfo';

interface Props {
  data: ITechnologyInfo | undefined;
}

const IMG_PREFIX = process.env.NEXT_PUBLIC_IMG_PREFIX;

const TechnologyModalCarrousel = ({ data }: Props) => {

  const swiperRef = useRef<SwiperCore>();

  return (
    <div className='w-full lg:max-w-sm relative lg:opacity-30 hover:opacity-100 transition-all duration-300 my-8 lg:ml-8'>

      <div className='absolute -left-5 top-[calc(50%-1.5rem)] z-10'>
        <Button
          className='p-2 rounded-full w-14 h-14 transition-colors duration-300
          dark:bg-secondary-900/75 hover:dark:bg-secondary-800/60 bg-primary-500/75 hover:bg-primary-600/80
          hover:shadow-none shadow-none'
          onClick={() => swiperRef.current?.slidePrev()}>
            <i className='fa-solid fa-arrow-left-long text-2xl sm:text-4xl dark:text-secondary-400 text-primary-300' />
        </Button>
      </div>
      
      <div className='absolute -right-5 top-[calc(50%-1.5rem)] z-10 '>
        <Button
          className='p-2 rounded-full w-14 h-14 transition-colors duration-300 hover:shadow-none shadow-none
          dark:bg-secondary-900/75 hover:dark:bg-secondary-800/60 bg-primary-500/75 hover:bg-primary-600/80'
          onClick={() => swiperRef.current?.slideNext()}>
            <i className='fa-solid fa-arrow-right-long text-2xl sm:text-4xl dark:text-secondary-400' />
        </Button>
      </div>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        autoplay={{delay: 4000}}
        pagination={{ clickable: true }}
        className='max-w-[250px] sm:max-w-sm md:max-w-md lg:max-w-2xl'
        onBeforeInit={(swiper) => swiperRef.current = swiper}
      >
        {
          data?.images.map(image => (
            <SwiperSlide key={image.url} className='w-full h-full mt-auto mb-auto'>
              {
                <Image 
                  src={`${IMG_PREFIX}${image.url}`}
                  alt={image.alternative_text}
                  title={image.alternative_text}
                  className='object-contain mx-auto rounded-xl'
                  width={image.width}
                  height={image.height}
                />
              }
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default TechnologyModalCarrousel;