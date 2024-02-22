import React, { useEffect } from 'react'
import { SWIGGY_MENU_URL } from '../Utilies/constants'
import { useDispatch } from 'react-redux'
import { getCards } from '../Utilies/cardsSlice'

const useGetRestrocards = () => {
    const dispatch = useDispatch()

    const getRestroCards = async() => {
        const data = await fetch(SWIGGY_MENU_URL)
        const json = await data.json()
        const restroData = json.data?.success?.cards
       
        dispatch(getCards(restroData))

 }

    useEffect(() => {
      getRestroCards()
  }, [])
 

  
}

export default useGetRestrocards