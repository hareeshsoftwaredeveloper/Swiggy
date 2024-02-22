import React from 'react'

import RestroCard from './RestroCard'
import useGetRestrocards from '../hooks/useGetRestrocards'
import { useSelector } from 'react-redux'
import RestroCardsListSection from './RestroCardsListSection'

const CardsList = () => {
 
 const restroCards=useSelector(store=>store.card.cards)
 console.log(restroCards)
  useGetRestrocards()
  return (
      <div>
          
          {restroCards &&
              <div className='mt-32'>
          
                <RestroCardsListSection title={restroCards[1]?.gridWidget?.header?.title} restroCards={restroCards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants} /> 
                <RestroCardsListSection title={restroCards[4]?.gridWidget?.header?.title} restroCards={restroCards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants} /> 
              
              </div>
          }
    </div>
  )
}

export default CardsList