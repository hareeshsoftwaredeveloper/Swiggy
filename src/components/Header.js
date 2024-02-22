import React from 'react'
import { CART_ICON, HELP_ICON, OFFERS_ICON, SEARCH_ICON, SIGN_IN_ICON, SWIGGY_ICON } from '../Utilies/constants'

const Header = () => {
  return (
      <div className='grid grid-flow-col p-4 shadow-lg grid-cols-12 fixed top-0 bg-white z-100 w-full'>
          <div className=' col-span-6'>
              <img alt='swiggy-icon' className='h-12' src={SWIGGY_ICON} />
          </div>
          <div className='flex items-center col-span-6'>
                <div className='flex items-center mr-10'>
                    <img alt='search-icon' className='h-10' src={SEARCH_ICON} />
                    <p>Search</p>
                </div>
                <div className='flex items-center mr-10'>
                    <img alt='offers-icon' className='h-6 mr-2' src={OFFERS_ICON} />
                    <p>Offers</p>
                </div>
                <div className='flex items-center mr-10'>
                    <img alt='help-icon' className='h-8' src={HELP_ICON} />
                    <p>Help</p>
                </div>
                <div className='flex items-center mr-10'>
                    <img alt='signIn-icon' className='h-8' src={SIGN_IN_ICON} />
                    <p>Sign In</p>
                </div>
                <div className='flex items-center mr-10'>
                    <img alt='cart-icon' className='h-8' src={CART_ICON} />
                    <p>Cart</p>
                </div>
          </div>

    </div>
  )
}

export default Header