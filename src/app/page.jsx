import Link from "next/link";



async function Home() {

  // Introducimos un retardo artificial
  // await new Promise(resolve => setTimeout(resolve, 1000))

  return (
    <section className="min-h-screen max-w-[1024px] mx-auto px-10">
      <h1 className='py-10 text-4xl text-blue-500 text-center border-b-4 border-b-blue-500'>
        NextJS: EXAMEN TEMA4 hecho por Daniel Serrano
      </h1>

      <div className="h-[400px] flex flex-col gap-10 justify-center content-center">
        <div className="flex flex-col items-center">
          <Link href="/medicos-db" className="block text-2xl text-blue-400 font-bold">
            BASE DE DATOS medicos
          </Link>
          <p>Requisitos previos: <span className="font-bold">Deberás tener una servidor MySQL para la DB local.</span></p>
        </div>

        <div className="flex flex-col items-center">
          <Link href="/medicos-api" className="block text-2xl text-blue-400 font-bold">
            API REST de Medicos
          </Link>
          <p>Requisitos previos: <span className="font-bold">Deberás tener un servidor JSON para la API local.</span></p>
        </div>

        <div className="flex flex-col items-center">
          <Link href="/pacientes-db" className="block text-2xl text-blue-400 font-bold">
            BASE DE DATOS de PACIENTES
          </Link>
          <p>Requisitos previos: <span className="font-bold">Deberás tener una servidor MySQL para la DB local.</span></p>
        </div>

        <div className="flex flex-col items-center">
          <Link href="/pacientes-api" className="block text-2xl text-blue-400 font-bold">
            API REST de PACIENTES
          </Link>
          <p>Requisitos previos: <span className="font-bold">Deberás tener un servidor JSON para la API local.</span></p>
        </div>

      </div>
    </section>
  )
}

export default Home