import React from 'react'

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const ResumePricing = ({data}) => {
  return (
    <div className='rounded-[20px] shadow-lg p-4 gap-6 flex flex-col'>
      <div className="w-full flex justify-between">{data?.taskComplexity}<span className='text-lg font-bold'>{data?.price}</span></div>
      <div className="w-full flex gap-2"><CalendarMonthIcon className='text-primaryBlue' fontSize='small' />{data?.deliveryTime}</div>
      <div className="w-full flex justify-between gap-6">
         <button className='btn-fill flex-1 text-sm'>Request Proposal</button>
         <button className='btn-outline flex-1 text-sm'>Chat with me</button>
      </div>
    </div>
  )
}

export default ResumePricing