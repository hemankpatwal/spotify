import React from 'react'

const Footer = () => (
    <div className="w-full h-full bg-neutral-800 flex z-10 sticky bottom-0">
        <div className='mt-[1%] flex ml-[1%] mb-5  w-full'>  
            <div className="flex flex-col w-[30%]"> 
                <div className="flex space-x-8">
                    <div>
                        <img src="/images/cover6.png" />        
                    </div>
                    <div className="flex flex-col text-white ">
                        <div className='text-md font-semibold'>
                            One Bottle Down
                        </div>
                        <div className=' text-xs font-light'>
                            Honey Singh
                        </div>
                    </div>
                    <div className='flex mt-[3%] space-x-4'>
                        <div>
                            <img src='/images/heart.png' />
                        </div>
                        <div>
                            <img src='/images/card.png' />
                        </div>
                    </div>
                </div>      
            </div>     
            <div className='flex flex-col space-y-3 '>
                <div className="flex space-x-9 justify-center">
                    <div className="mt-[2%]">
                        <img src='/images/skip.png' />
                    </div>
                    <div>
                        <img src='/images/play.png' />
                    </div>
                    <div className="mt-[2%]">
                        <img src='/images/right.png' />
                    </div>
                </div>
                <div className="">
                    <img src='/images/player.png' />
                </div>
            </div>    
        </div>

    </div>    
)   

export default Footer