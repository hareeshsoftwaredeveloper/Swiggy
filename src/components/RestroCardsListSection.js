import React from 'react'
import RestroCard from './RestroCard'

const RestroCardsListSection = ({ title, restroCards }) => {
  return (
      <div className='px-28 mt-6'>
          <h1 className=' font-bold text-2xl'>{title}</h1>
          <div className='flex flex-wrap my-4 '>
            {restroCards.map(card => <RestroCard key={card?.info?.id} imgUrl={card?.info?.cloudinaryImageId} name={card?.info?.name} rating={card?.info?.avgRating} deliveryTime={card?.info?.sla?.slaString} cuisines={card?.info.cuisines.join(",")} />)}
          </div>
        
    </div>
  )
}

export default RestroCardsListSection