import TecnologiasComponent from './TecnologiasComponent'
import 'swiper/css';
import 'swiper/css/pagination';
const ListBackend = () => {
  return (
      <div className='w-full rounded-xl bg-stone-200 text-stone-900 max-h-[20rem] overflow-y-auto relative'>
          <div className='border border-stone-900 p-4 text-3xl sticky top-0 bg-stone-300 '>MEUS PROJETOS <span className='font-bold'>BACKEND</span> </div>
        
       
                  <div className='p-4 border w-full h-fit border-stone-900 border-t-0 text-xl flex justify-between'>API SPRING
                      <TecnologiasComponent tecnologias={{ Java: true, Spring: true }} />
                  </div>
                  
                  <div className='p-4 border w-full h-fit border-stone-900 border-t-0 text-xl flex justify-between'>API SPRING
                      <TecnologiasComponent tecnologias={{ Java: true, Spring: true }} />
                  </div>

                  <div className='p-4 border w-full h-fit border-stone-900 border-t-0 text-xl flex justify-between'>API SPRING
                      <TecnologiasComponent tecnologias={{ Java: true, Spring: true }} />
                  </div>

                  <div className='p-4 border w-full h-fit border-stone-900 border-t-0 text-xl flex justify-between'>API SPRING
                      <TecnologiasComponent tecnologias={{ Java: true, Spring: true }} />
                  </div>

                  <div className='p-4 border w-full h-fit border-stone-900 border-t-0 text-xl flex justify-between'>API SPRING
                      <TecnologiasComponent tecnologias={{ Java: true, Spring: true }} />
                  </div>


         
             

       
        
    </div>
  )
}

export default ListBackend