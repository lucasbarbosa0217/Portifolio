import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';

export default function LucasCards() {
    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                <SwiperSlide className="flex items-center justify-center bg-red"><img src="./lucaspro.png" /></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center bg-red"><img src="./lucaspessoal.png" /></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center bg-red"><img src="./lucasolhos.png" /></SwiperSlide>
             
            </Swiper>
        </>
    );
}
