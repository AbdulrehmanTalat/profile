import Image from "next/image";
import Link from "next/link";
import todoapp from '../../../public/projects/todoapp.png';
import panaverseapp from '../../../public/projects/panaverse.png';
import pricingui from '../../../public/projects/pricingui.png';


export default function Projects() {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>

          <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] hover:scale-105 ease-in duration-300'>
            <Image className='rounded-xl group-hover:opacity-10' src={todoapp} alt='/' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='text-2xl text-white tracking-wider text-center'>{'Todo App'}</h3>
              <p className='pb-4 pt-2 text-white text-center'>{'next js'}</p>
              <Link href='https://art-todo-app-hk74.vercel.app/'>
                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
              </Link>
            </div>
          </div>

          <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] hover:scale-105 ease-in duration-300'>
            <Image className='rounded-xl group-hover:opacity-10' src={panaverseapp} alt='/' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='text-2xl text-white tracking-wider text-center'>{'Panaverse App'}</h3>
              <p className='pb-4 pt-2 text-white text-center'>{'next js'}</p>
              <Link href='https://panaverse-dao-umber.vercel.app/'>
                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
              </Link>
            </div>
          </div>

          <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] hover:scale-105 ease-in duration-300'>
            <Image className='rounded-xl group-hover:opacity-10' src={pricingui} alt='/' />
            <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
              <h3 className='text-2xl text-white tracking-wider text-center'>{'Pricing Ui'}</h3>
              <p className='pb-4 pt-2 text-white text-center'>{'next js'}</p>
              <Link href='https://pricing-ui-six-alpha.vercel.app/'>
                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}