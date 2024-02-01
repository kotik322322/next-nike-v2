import Image from 'next/image'
import React from 'react'
import loaderImage from "../../../../assets/images/loader.png"

const LoadingPage = () => {
  return (
    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <Image src={loaderImage} width={100} height={100} alt='Loader Picture' className='animate-spin w-full'/>
      <p className='mt-6 font-semibold '>Loading...</p>
    </div>
  )
}

export default LoadingPage