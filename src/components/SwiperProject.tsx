import { Children, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/scrollbar';
import "./Swiper.css";

type Props = {
  children: React.ReactNode;
};

const SwiperProject: React.FC<Props> = ({ children }) => {
  const ref = useRef(null); 
  const isInView = useInView(ref, { once: true });  

  return (
    <div ref={ref} className="mySwiper bookList flex md:grid pb-8 mt-16  md:px-0 snap-x snap-mandatory justify-start md:justify-center md:grid-cols-2  lg:grid-cols-3  2xl:grid-cols-4  max-h-[50rem] md:overflow-y-auto  gap-y-16 gap-x-8  w-full overflow-x-auto">
      {Children.map(children, (child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}  
          transition={{
            delay: isInView ? index * 0.3 : 0,  
            ease: 'easeInOut',
          }}
          className='flex flex-col snap-center items-center '
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

export default SwiperProject;
