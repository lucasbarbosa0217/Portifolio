
import { Navigation, Scrollbar, Mousewheel } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/scrollbar';
import "./Swiper.css"
import React, { Children } from 'react';

type Props = {
  children: React.ReactNode;
};

const SwiperProject: React.FC<Props> = ({children}) => {
  return (

    <Swiper
      slidesPerView={'auto'}
      spaceBetween={32}
      scrollbar={{
        hide: false,
        draggable: true,
      }}
      mousewheel={{
        enabled: true
      }}
      modules={[Scrollbar, Navigation, Mousewheel]}
      className="mySwiper container flex h-[35rem] max-h-max pb-12 bookList "
    >

      {Children.map(children, (child, index) => (
        <SwiperSlide className="md:w-fit" key={index}>
          {child}
        </SwiperSlide>
      ))}
      
 
    </Swiper>
  )
}

export default SwiperProject