import React from 'react'

const Maincard = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="rounded-lg bg-white text-center px-4 py-8 max-w-screen-md cursor-default"
       style={{ boxShadow: "inset 5px 5px 5px rgba(0, 0, 0, 0.3)" }}
       >
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
          From Corporate Events  to Parties on the lawn, we turn your vision into reality with seamless planning and extraordinary attention to detail.
        </h1>
      </div>
    </div>
  )
}

export default Maincard