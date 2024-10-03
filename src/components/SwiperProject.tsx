import { Children, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/scrollbar';
import "./Swiper.css";

type Props = {
  children: React.ReactNode;
};

const SwiperProject: React.FC<Props> = ({ children }) => {
  const ref = useRef(null);  // Criando referência para o contêiner pai
  const isInView = useInView(ref, { once: true });  // A animação acontece apenas na primeira vez que o contêiner é visível

  return (
    <div ref={ref} className="mySwiper m-auto bookList flex lg:grid container  justify-start lg:justify-center lg:grid-cols-2 max-h-[50rem] overflow-y-auto  gap-y-8 gap-x-6  w-full overflow-x-auto">
      {Children.map(children, (child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}  // Anima apenas quando o contêiner está visível
          transition={{
            delay: isInView ? index * 0.3 : () => {return 0},  // Aplica o delay baseado no índice quando visível
            duration: 0.5,
            ease: 'easeInOut',
          }}
          className=''
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
};

export default SwiperProject;
