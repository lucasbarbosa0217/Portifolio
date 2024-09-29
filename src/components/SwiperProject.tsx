import React from 'react'
import { Navigation, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProjectCard from './ProjectCard'
import 'swiper/css';
import 'swiper/css/scrollbar';

const SwiperProject = () => {
  return (

    <Swiper
      slidesPerView={'auto'}
      spaceBetween={32}
      scrollbar={{
        hide: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Scrollbar, Navigation]}
      className="mySwiper container flex flex-start pb-8 bookList pr-9"
    >
     <SwiperSlide className="w-fit">
        <ProjectCard
          projectName='Re;Aprender'
          projectDescription="Re;Aprender é o projeto de conclusão do Bootcamp da Java e React da Generation Brazil. É um e-commerce de livros didáticos."
          repoUrl="https://github.com/Re-Aprender/FrontEnd"
          tecnologias={{ React: true, Typescript: true, Css: true, Tailwind: true }}
          siteUrl='https://reaprenderlivros.netlify.app'
          imageUrl="/reaprender.png"
        ></ProjectCard>
   
     </SwiperSlide>
      <SwiperSlide className="w-fit">   <ProjectCard
        projectName='LuMusic'
        projectDescription="LuMusic é uma plataforma de streaming de músicas com foco no visual fofo e pastel."
        repoUrl="https://github.com/Re-Aprender/FrontEnd"
        tecnologias={{ React: true, Typescript: true, Css: true, Tailwind: true }}
        siteUrl='https://reaprenderlivros.netlify.app'
        imageUrl="/reaprender.png"
      ></ProjectCard></SwiperSlide>
   
      <SwiperSlide className="w-fit">     <ProjectCard
        projectName='LuMusic'
        projectDescription="LuMusic é uma plataforma de streaming de músicas com foco no visual fofo e pastel."
        repoUrl="https://github.com/Re-Aprender/FrontEnd"
        tecnologias={{ React: true, Typescript: true, Css: true, Tailwind: true }}
        siteUrl='https://reaprenderlivros.netlify.app'
        imageUrl="/reaprender.png"
      ></ProjectCard></SwiperSlide>

      <SwiperSlide className="w-fit">     <ProjectCard
        projectName='LuMusic'
        projectDescription="LuMusic é uma plataforma de streaming de músicas com foco no visual fofo e pastel."
        repoUrl="https://github.com/Re-Aprender/FrontEnd"
        tecnologias={{ React: true, Typescript: true, Css: true, Tailwind: true }}
        siteUrl='https://reaprenderlivros.netlify.app'
        imageUrl="/reaprender.png"
      ></ProjectCard></SwiperSlide>
 
    </Swiper>
  )
}

export default SwiperProject