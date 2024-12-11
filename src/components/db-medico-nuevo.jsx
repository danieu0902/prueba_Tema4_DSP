import mysql from "@/lib/mysql"
import { revalidatePath } from "next/cache"


async function nuevoMedico(formData) {
    'use server'
    const nombre = formData.get('nombre')
    const especialidad = formData.get('especialidad')
    const perfil = formData.get('perfil')

    const sql = 'insert into `medicos` (`nombre`, `especialidad`, `perfil`) values (?, ?, ?)'
    const values = [nombre, especialidad, perfil];

    const [result, fields] = await mysql.query(sql, values)
    revalidatePath('/medicos')
}



function MedicoNuevo() {
    return (
        <form className='my-10 grid grid-cols-[150px_auto] gap-4'>

            <label htmlFor='nombre'>Nombre</label>
            <input required id='nombre' name='nombre' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

            <label htmlFor='especialidad'>Especialidad: </label>
            <input required id='especialidad' name='especialidad' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

            <label htmlFor='perfil'>perfil: </label>
            <input required id='perfil' name='perfil' type='enum' values="RESIDENTE, ESPECIALISTA"   className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

            <div className='col-span-2 grid gap-2'>
                <button formAction={nuevoMedico} className='bg-green-600 text-white px-4 py-2 rounded-xl'>
                    Guardar Medico
                </button>
                <button type='reset' className='bg-slate-600 text-white px-4 py-2 rounded-xl'>
                    Limpiar campos
                </button>
            </div>
        </form>
    );
}

export default MedicoNuevo;