import React, { useContext } from 'react'
import { ImageContext } from '../App'
import Image from './Image';

const Images = () => {
    const{response,isLoading}=useContext(ImageContext);
  return (
    <>
    <h1 className='text-center mt-6 underline text-2xl'> Result For Cats</h1>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10'>
        {response.map((data,key)=><Image key={key} data={data} />)}
    </div>
    </>
  )
}

export default Images