import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards, Autoplay, Navigation } from 'swiper/modules';

export default function LucasCards() {
    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                autoplay={{
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                navigation={true}

                modules={[EffectCards, Autoplay, Navigation]}
                className="mySwiper self-center"
            >
                <SwiperSlide className="flex items-center justify-center bg-red"><img src="./lucaspro.webp" /></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center bg-red"><img src="./lucaspessoal.webp" /></SwiperSlide>
                <SwiperSlide className="flex items-center justify-center bg-red"><img src="./lucasolhos.webp" /></SwiperSlide>
             
            </Swiper>
        </>
    );
}
