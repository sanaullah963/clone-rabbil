import React from 'react'

import  img  from "../Images/whyus.png";
import Image from 'next/image';
export default function Whyus() {
  return (
    <main className='bg-gray-100 py-20'>
      <div className='container flex m-auto gap-4'>
        <div className='w-1/2 m-auto'>
          <Image src={img} className='my-auto'/>
          
        </div>
        {/* right section */}
        <div className='w-1/2'>
          <p className='color font-semibold mb-3'>Why Choose Us</p>
          <h1 className='text-4xl font-semibold mb-5'>Learn Something Good, Do Something Better</h1>
          <p className='mb-4'>Learn With Rabbil is a top leading edutech platform for software development. We provide online courses for majors in mobile & web development. Research & development, teaching, and community leading is our vision . Our specialty is industry-oriented teaching processes, guidelines, study plans, and classes with resourceful content. Learn confidently with us software industry needs quality developers.</p>
          <p className='mb-4'>Rabbil Hasan is our core instructor. He is working on web & mobile application development for more than 8 years. He started his programming instructor career at Bangladesh ICT Ministry in a software development program. After that, he plays a great role as a software development instructor at CBA-IT, STEPUP-IT, TexLab, and Northbengal IT. Presently he is working at IDLC Finance Ltd as a senior software engineer. Working with country-leading fintech solutions.</p>
          <p className='mb-4'>This online programming education platform was first born in 2017 with a YouTube channel named RABBIL HASAN. 7 years has been passed, we created lots of lessons, videos, and guidelines, courses on software engineering to enhance the digital growth of Bangladesh.</p>
          <button className='text-lg px-3 py-2 rounded-lg border-2 border-green-500 hover:text-gray-900 hover:bg-slate-50 hover:border-2 hover:border-green-500 btn-color transition-all'>Read more</button>
        </div>
      </div>


    </main>
  )
}
