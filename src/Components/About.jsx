import React from 'react'
import photo from './photo.jpg'

function About() {
  return (
    <div className='w-full h-auto p-5'>
      <div className='w-full md:w-[95%] h-auto bg-gray-200 border-solid border-2 border-indigo-600 mx-auto mt-5 rounded'>
        <div className='w-full h-auto flex items-center justify-center p-5'>
          <div className='w-32 h-32 md:w-48 md:h-48 object-cover overflow-hidden rounded-full border-solid border-4 border-red-600'>
            <img className='w-full h-full rounded-full' src={photo} alt="Arjun Kanaujiya" />
          </div>
        </div>
        <h1 className='text-center text-2xl font-bold'>Arjun Kanaujiya: Master Carpenter</h1>
        <div className='w-full md:w-[90%] h-auto mt-5 mx-auto'>
          <h2 className='text-2xl font-bold ml-5'>About Me</h2>
          <p className='text-xl font-semibold mt-2 ml-5'>
            With over 20 years of experience in wood working, I specialize in custom furniture, cabinetry, and home renovations. My journey began in Surat, and I have since worked in Tamil Nadu and Bangalore, building a reputation for exceptional craftsmanship. Now based in Delhi, I continue to impress clients with innovative designs and a commitment to quality. My work reflects a perfect blend of classic elegance and modern minimalism, tailored to meet each client's unique vision.
          </p>
          <h2 className='text-2xl font-bold mt-5 ml-5'>Contact</h2>
          <p className='text-xl font-semibold ml-5'></p>
          <h2 className='text-xl font-bold mt-5 ml-5 '>Website Related Queries</h2>
          <p className='text-sm font-semibold  ml-5'>Email: himanshukumar13333@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default About
