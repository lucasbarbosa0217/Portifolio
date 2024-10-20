import TecnologiasComponent from './TecnologiasComponent'


const ListBackend = () => {
  return (
      <div className='w-full container bg-stone-200 text-stone-900 max-h-[50rem] overflow-y-auto relative font-mono'>
          <div className='border border-stone-900 p-4 text-3xl sticky top-0 bg-stone-300 '>MEUS PROJETOS <span className='font-bold'>BACKEND</span> </div>
        
       
                  <div className='p-4 border w-full h-fit border-stone-900 border-t-0 text-xl flex justify-between backenditem'>
                    
              <a href="https://github.com/lucasbarbosa0217/Blog-Pessoal-Spring" target="_blank" className='underline'>Blog Pessoal </a>
                      <TecnologiasComponent tecnologias={{ Java: true, Spring: true }} />
                  </div>
                  

          <div className='p-4 border w-full h-fit border-stone-900 border-t-0 text-xl flex justify-between backenditem'>

              <a href="https://github.com/Re-Aprender/Backend" target="_blank" className='underline'>Re;Aprender </a>
              <TecnologiasComponent tecnologias={{ Java: true, Spring: true }} />
          </div>


          <div className='p-4 border w-full h-fit border-stone-900 border-t-0 text-xl flex justify-between backenditem'>

              <a href="https://github.com/lucasbarbosa0217/API-SPRING-FARMACIA" target="_blank" className='underline'>Famarcia </a>
              <TecnologiasComponent tecnologias={{ Java: true, Spring: true }} />
          </div>

          <div className='p-4 border w-full h-fit border-stone-900 border-t-0 text-xl flex justify-between backenditem'>

              <a href="https://github.com/lucasbarbosa0217/AGENDA-JSX-EXPRESS-NODE" target="_blank" className='underline'>Agenda</a>
              <TecnologiasComponent tecnologias={{ Javascript: true, NodeJs: true, Mongo: true, Mongoose: true }} />
          </div>
        

          <div className='p-4 border w-full h-fit border-stone-900 border-t-0 text-xl flex justify-between backenditem'>

              <a href="https://github.com/lucasbarbosa0217/Api-Blogs-Mongoose" target="_blank" className='underline'>Api de Blogs com Mongoose</a>
              <TecnologiasComponent tecnologias={{ Javascript: true, NodeJs: true, Mongo: true, Mongoose: true  }} />
          </div>



          <div className='p-4 border w-full h-fit border-stone-900 border-t-0 text-xl flex justify-between backenditem'>

              <a href="https://github.com/lucasbarbosa0217/NLW-NODE-ENQUETES/tree/main" target="_blank" className='underline'>NLW Enquetes</a>
              <TecnologiasComponent tecnologias={{ Typescript: true, NodeJs: true}} />
          </div>
          <div className='p-4 border w-full h-fit border-stone-900 border-t-0 text-xl flex justify-between backenditem'>

              <a href="https://github.com/lucasbarbosa0217/contabancaria" target="_blank" className='underline'>Conta Bancaria </a>
              <TecnologiasComponent tecnologias={{ Java: true }} />
          </div>

         
             

       
        
    </div>
  )
}

export default ListBackend