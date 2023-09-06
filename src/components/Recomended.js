import React from 'react'

import Image from 'next/image'
import mernLogo from '@/Images/icon/5.png'
import larableLogo from '@/Images/icon/7.png'
import mongoLogo from '@/Images/icon/3.png'
import expressLogo from '@/Images/icon/8.png'

const addImage = (imageName,heddingText)=>{

 return <div className='w-1/4 flex gap-3 bg-orange-100 px-2 py-3 rounded-xl border-2 hover:border-green-400 duration-200 cursor-grab'>
            <div className='w-1/3 my-auto'>
              <Image className='rounded-full' src={imageName}/>
            </div>
            <div className='w-2/3'>
              <h1 className='text-2xl font-semibold text-blue-950'>{heddingText}</h1>
              <p>Some content from a media...</p>
            </div>
          </div>
}
export default function Recomended() {
  return (
    <main>
      <div className=' container m-auto mt-20 mb-14'>
        <h1 className='font-bold text-4xl color mb-8'>Recommended</h1>
        <div className='flex justify-between w-full gap-7'>

          {/* item */}
          {addImage(mernLogo,'Mern stack')}
          {addImage(larableLogo,'Laravel')}
          {addImage(mongoLogo,'Mongo DB')}
          {addImage(expressLogo,'Express JS')}
          
        </div>
      </div>

    </main>
  )
}
