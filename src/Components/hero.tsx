import heroComunidad from '../assets/heroComunidad.jpeg'

export const Hero = () => {
    return (
        <section className='relative flex min-h-[640px] items-center justify-center
        overflow-hidden'>

            <img src={heroComunidad}
                alt="Convivencia Iglesia San Juan de la Cruz"
                className='fixed inset-0 -z-10 h-full w-full object-cover' />

            <div className='fixed inset-0 -z-10 bg-black/55' />

            <div className='relative z-10 flex max-w-4xl flex-col items-center px-6 text-center text-white'>

                <span className='rounded-full bg-[#C9A227] px-4 py-1 text-xs fond-medium uppercase tracking-wider'>
                    Bienvenidos
                </span>

                <h1 className='mt-6 font-["Cormorant_Garamond"] text-7xl font-semibold leading-tight md:text-7xl'>
                    Un Espacio para Crecer, Compartir y Vivir en la Fe
                </h1>

                <p className='mt-6 max-w-2x1 text-base text-white/90 md:text-lg'>
                    Te invitamos a mantenernos informados de las actividades de la iglesia y de comunidad
                </p>

                <div className='mt-10 flex flex-wrap justify-center gap-4 font-["Poppins"]'>
                    <button className='rounded-md bg-[#C9A227] px-6 py-3 text-sm font-medium text-white transition
                hover:bg-[#b08d1f]'>Quienes Somos</button>

                    <button className='rounded-md border border-white px-6 py-3 text-sm font-medium text-white
                transition hover:bg-white hover:text-black'>Reuniones</button>
                </div>
            </div>

        </section>
    )
}

export default Hero;