import EventCard from '@/app/componets/EventCard'
import React from 'react'

const Product = () => {
  return (
    <div className='bg-gray-800'>
              <div className="h-screen bg-fixed bg-center bg-cover bg-background-image-event">
          <div className="h-full bg-black/50 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold">
              Event 
            </h1>
          </div>
        </div>
      <div className='text-white pt-40'>
      </div>
      <EventCard/>

    </div>
  )
}

export default Product