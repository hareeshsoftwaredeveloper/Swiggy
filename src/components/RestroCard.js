import React from 'react'
import { CDN_URL } from '../Utilies/constants'

const RestroCard = ({imgUrl, name, rating, deliveryTime, cuisines}) => {
  return (
      <div className='mr-10 mb-10 w-52 shadow-lg rounded-lg cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-95 duration-200'>
          <img alt='restro-card' className='r rounded-t-lg' src={CDN_URL + imgUrl} />
          <div className='p-2'>
             <h1 className='font-bold'>{name}</h1>
             <div className=' font-semibold'>
                <span className='mr-2'>{rating}</span>
                <span>{deliveryTime}</span>
             </div>
              <p className=' overflow-hidden'>{cuisines}</p>
          </div>
     </div>
  )
}

export default RestroCard