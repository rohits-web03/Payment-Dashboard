import React from 'react'

const OverviewCard = ({title,value,money}) => {
  return (
    <div className='flex flex-col justify-center items-start bg-[#ffffff] rounded-lg m-2 p-6 shadow'>
      <p className='text-slate-900 text-lg'>{title}</p>
      <p className='font-semibold text-3xl'>{money?'₹':''}{value}</p>
    </div>
  )
}

export default OverviewCard