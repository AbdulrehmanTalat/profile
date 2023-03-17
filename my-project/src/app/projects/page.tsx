import Image from "next/image";
import Link from "next/link";
import propertyImg from '../../../public/projects/property.jpg';
import cryptoImg from '../../../public/projects/crypto.jpg'
import netflixImg from '../../../public/projects/netflix.jpg'
import twitchImg from '../../../public/projects/twitch.jpg'
export default function Projects() {
    return (
        <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
    <Image className='rounded-xl group-hover:opacity-10' src={propertyImg} alt='/' /> 
    <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        
    </div>
 </div>
         
        </div>
      </div>
    </div>
    )
}