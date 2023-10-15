import React from 'react'

const Joincard = ({details, index}) => {
  return (
    <div className='w-[350px] sm:w-[405px] sm:h-[266px] bg-white p-10 rounded-[20px] shadow-lg flex flex-col gap-1 relative'>
        <div className="title font-bold text-xl">{details.title}</div>
        <div className="desc text-left">{details.desc}</div>
        <div className="info h-[115px] rounded-[10px] flex gap-1 bg-cardInfoBg p-2">
            <div className="due flex flex-col gap-1 w-[40%]">
                <span className="text-cardBlue font-bold text-lg">Due Date</span>
                <span className="">{details.due}</span>
            </div>
            <div className="pen flex flex-col gap-1 w-[60%]">
                <span className="text-cardRed font-bold text-lg">Penalty fees</span>
                <span className="text-left">{details.penalty}</span>
            </div>
        </div>
        {/* anchor */}
        <div className='absolute p-2 anchorGradient text-xl font-bold text-white rounded-md -top-1 -left-1'>{index}<sup>{details.sup}</sup></div>
    </div>
  )
}

export default Joincard