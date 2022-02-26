import React from 'react'
import { motion } from "framer-motion"

const Footer = () => (
    <div className="w-full h-full bg-neutral-800 flex z-10 sticky bottom-0">
        <div className='mt-[1%] flex ml-[1%] mb-5  w-full'>  
            <div className="flex flex-col w-[30%]"> 
                <div className="flex space-x-8">
                    <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2 }}>
                        <img src="/images/cover6.png" />        
                    </motion.div>
                    <div className="flex flex-col text-white ">
                        <div className='text-md font-semibold'>
                            One Bottle Down
                        </div>
                        <div className=' text-xs font-light'>
                            Honey Singh
                        </div>
                    </div>
                    <div className='flex mt-[3%] space-x-4'>
                        <motion.div
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => {}}
                        onHoverEnd={e => {}}>
                            <img src='/images/heart.png' />
                        </motion.div>
                        <motion.div
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => {}}
                        onHoverEnd={e => {}}>
                            <img src='/images/card.png' />
                        </motion.div>
                    </div>
                </div>      
            </div>     
            <div className='flex flex-col space-y-3 '>
                <div className="flex space-x-9 justify-center">
                    <motion.div
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}}
                     className="mt-[2%]">
                        <img src='/images/skip.png' />
                    </motion.div>
                    <motion.div
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}}>
                        <img src='/images/play.png' />
                    </motion.div>
                    <motion.div
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={e => {}}
                    onHoverEnd={e => {}}
                     className="mt-[2%]">
                        <img src='/images/right.png' />
                    </motion.div>
                </div>
                <div>
                    <img src='/images/player.png' />
                </div>
            </div>    
        </div>

    </div>    
)   

export default Footer