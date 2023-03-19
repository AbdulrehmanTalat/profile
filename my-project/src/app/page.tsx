'use client'
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Typewriter from 'typewriter-effect';
export default function Home() {
  return (
    <>
      <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
          <div>
            {/* <p className='uppercase text-sm tracking-widest text-gray-600'> */}
              <Typewriter
                options={{
                  strings: ["LET'S BUILD SOMETHING TOGETHER"],
                  autoStart: true,
                  loop: true,
                }}
              />
            {/* </p> */}
            <h1 className='py-4 text-gray-700'>
              Hi, I&#39;m <span className='text-[#5651e5]'> Abdulrehman</span>
            </h1>
            <h1 className='py-2 text-gray-700'>A Full-Stack Developer</h1>
            <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
              I’m focused on building responsive front-end web applications
              integrating back-end technologies.
            </p>
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
              <a
                href='https://www.linkedin.com/in/abdulrehman-talat-3326b4133/'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                href='https://github.com/AbdulrehmanTalat'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <FaGithub />
                </div>
              </a>
              <Link href={'contact'}>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <AiOutlineMail />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}