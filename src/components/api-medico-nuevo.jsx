import { revalidatePath } from "next/cache";


async function nuevoMedico(formData) {
    'use server'
    const [nombre, especialidad, perfil] = formData.values()

    const response = await fetch('http://localhost:4000/medicos', {
        method: 'POST',
        body: JSON.stringify({ nombre, especialidad, perfil, createdAt: new Date().toISOString() })
    })
    const data = await response.json()

    revalidatePath('/medic')
}



function MedicoNew() {
    return (
        <form className='my-10 grid grid-cols-[150px_auto] gap-4'>

            <label htmlFor='nombre'>Name</label>
            <input required id='nombre' name='nombre' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

            <label htmlFor='especialidad'>Description:</label>
            <input required id='especialidad' name='especialidad' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

            <label htmlFor='perfil'>Price</label>
            <input required id='perfil' name='perfil' type='number' step='0.01' className='p-1 border border-slate-200 focus:outline-blue-300 text-lg' />

            <div className='col-span-2 grid gap-2'>
                <button formAction={nuevomedico} className='bg-green-600 text-white px-4 py-2 rounded-xl'>
                    Guardar medico
                </button>
                <button type='reset' className='bg-slate-600 text-white px-4 py-2 rounded-xl'>
                    Limpiar campos
                </button>
            </div>
        </form>
    );
}

export default MedicoNew;