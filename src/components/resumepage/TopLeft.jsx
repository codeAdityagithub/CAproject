import StarIcon from '@mui/icons-material/Star';
import React from 'react'
import ResumePricing from '../cards/ResumePricing';

const Topleft = ({data}) => {
  return (
    <div className='flex-[3] max-w-[500px] p-4 flex flex-col gap-6'>
        <div className='flex flex-col items-start p-2 gap-6'>
            <h2 className='text-3xl font-bold'>{data?.name}</h2>
            <p className='text-lg'>{data?.intro}</p>
            <span className="inline-flex items-start justify-center text-primaryBlue">
                {data?.rating}
                <StarIcon fontSize="small" />
                <span className="text-black">{"("+data?.reviewCount+")"}</span>
            </span>

        </div>
        <ResumePricing data={data} />
        {/* testimonials */}
        <div className="rounded-[20px] shadow-lg p-4 flex flex-col gap-4">
            <h2 className='text-2xl font-bold'>What people say?</h2>
            <p className='text-lg'>{data?.testimonial.text}</p>
        </div>
    </div>
  )
}

export default Topleft