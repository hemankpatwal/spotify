import { motion } from "framer-motion"
import React from "react"

const Landing = () => (
    <div className="w-full h-full">
        <div className="flex">
            <div className="flex flex-col bg-black w-[18%]">
                <div className="ml-[10%] mt-[15%]">
                    <img src="/images/icon1.png"/>
                </div>
                <div className="space-y-2">
                    <button 
                    
                    className="flex mt-[20%] justify-start space-x-5">
                        <motion.div
                         
                          >
                            <img src="/images/icon3.png" />
                        </motion.div>
                        <motion.div
                        
                         className="mt-[2%]">
                            <img src="/images/icon2.png"/>
                        </motion.div>
                        <div className=" text-white text-xl">
                            Home
                        </div>
                    </button>
                    <div className="flex mt-[20%] justify-start space-x-5 ml-[8%]">
                        <div className="mt-[2%]">
                            <img src="/images/icon4.png"/>
                        </div>
                        <div className=" text-white text-xl">
                            Search
                        </div>
                    </div>
                    <div className="flex mt-[20%] justify-start space-x-5 ml-[8%]">
                        <div className="mt-[2%]">
                            <img src="/images/icon5.png"/>
                        </div>
                        <div className=" text-white text-xl">
                            Your Library
                        </div>
                    </div>
                   
                </div>
                <div className=" text-white mt-[45%] ml-[8%] space-y-5 ">
                    <div className="text-xl ">
                        Playlists
                    </div>                 
                    <div className=" flex space-x-5 ">
                        
                        <div className="">
                            <img src="/images/icon7.png" />
                        </div>
                        <div className="font-semibold text-lg">
                            Create new playlists
                        </div>
                    </div>
                    <div className="font-medium text-base">
                            Dope Shope - Honey Singh
                    </div>
                    <div className="font-medium text-base">
                            Brown Rang - Honey Singh
                    </div>
                    <div className="font-medium text-base">
                            Blue Eyes - Honey Singh
                    </div>
                    <div className="font-medium text-base">
                            Manali Trance - Honey Singh
                    </div>
                    <div className="font-medium text-base">
                            High Heels - Honey Singh
                    </div>
                    <div className="font-medium text-base">
                            Chaar Bottle Vodka - Honey Singh
                    </div>
                    <div className="font-medium text-base">
                            Sunny Sunny - Honey Singh
                    </div>
                    <div className="font-medium text-base">
                            Breakup Party - Honey Singh
                    </div>
                    <div className="font-medium text-base">
                            Party All Night - Honey Singh
                    </div>
                    
                </div>
            </div>



            <div className="bg-neutral-900 flex flex-col w-full">

                <div className="flex mt-[2%] w-full">
                    <motion.div
                     whileHover={{ scale: 1.2 }}
                     onHoverStart={e => {}}
                     onHoverEnd={e => {}} 
                    className="ml-[5%]">
                        <img src="/images/icon11.png" />
                    </motion.div>
                    <motion.div
                     whileHover={{ scale: 1.2 }}
                     onHoverStart={e => {}}
                     onHoverEnd={e => {}} 
                    className="ml-[2%]">
                        <img src="/images/icon10.png" />
                    </motion.div>
                    <motion.div 
                     whileHover={{ scale: 1.2 }}
                     onHoverStart={e => {}}
                     onHoverEnd={e => {}}
                    className="ml-[72%]">
                        <img src="/images/icon9.png" />
                    </motion.div>
                </div>
                <div className="mt-[3%] ml-[5%] font-extrabold text-5xl text-white">
                    Good Evening
                </div>

                <div>
                    <div className="flex space-x-[4%] h-[22rem]  ">
                        <motion.div 
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => {}}
                        onHoverEnd={e => {}}
                        className="flex flex-col bg-neutral-800 w-[15%]  justify-center items-center ml-[5%] mt-[2%] rounded-2xl ">
                            <div>
                                <img src="/images/cover1.png" />
                            </div>
                            <div className="font-medium text-base text-white">
                                Daily Mix 3
                            </div>
                            <div className="text-zinc-500 text-sm text-center">
                                Honey Singh, Sidhu Moosewala, Wazir Patar etc.
                            </div>
                        </motion.div>

                        <motion.div
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => {}}
                        onHoverEnd={e => {}}
                         className="flex flex-col bg-neutral-800 w-[15%] justify-center items-center ml-[5%] mt-[2%] rounded-2xl">
                            <div>
                                <img src="/images/cover2.png" />
                            </div>
                            <div className="font-medium text-base text-white">
                                Daily Mix 3
                            </div>
                            <div className="text-zinc-500 text-sm text-center">
                                Honey Singh, Sidhu Moosewala, Wazir Patar etc.
                            </div>

                        </motion.div>

                        <motion.div
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => {}}
                        onHoverEnd={e => {}} 
                        className="flex flex-col bg-neutral-800 w-[15%] justify-center items-center ml-[5%] mt-[2%] rounded-2xl">
                            <div>
                                <img src="/images/cover3.png" />
                            </div>
                            <div className="font-medium text-base text-white">
                                Daily Mix 3
                            </div>
                            <div className="text-zinc-500 text-sm text-center">
                                Honey Singh, Sidhu Moosewala, Wazir Patar etc.
                            </div>

                        </motion.div>

                        <motion.div
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => {}}
                        onHoverEnd={e => {}}
                         className="flex flex-col bg-neutral-800 w-[15%] justify-center items-center ml-[5%] mt-[2%] rounded-2xl">
                            <div>
                                <img src="/images/cover4.png" />
                            </div>
                            <div className="font-medium text-base text-white">
                                Daily Mix 3
                            </div>
                            <div className="text-zinc-500 text-sm text-center">
                                Honey Singh, Sidhu Moosewala, Wazir Patar etc.
                            </div>

                        </motion.div>

                        <motion.div 
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => {}}
                        onHoverEnd={e => {}}
                        className="flex flex-col bg-neutral-800 w-[15%] justify-center items-center ml-[5%] mt-[2%] rounded-2xl">
                            <div>
                                <img src="/images/cover5.png" />
                            </div>
                            <div className="font-medium text-base text-white">
                                Daily Mix 3
                            </div>
                            <div className="text-zinc-500 text-sm text-center">
                                Honey Singh, Sidhu Moosewala, Wazir Patar etc.
                            </div>

                        </motion.div>
                        
                    </div>
                
                </div>
                <div className="mt-[3%] ml-[5%] font-extrabold text-5xl text-white">
                    Favorite Artist
                </div>

                <div>
                    <div className="flex space-x-[4%] h-[22rem]">
                        <motion.div
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => {}}
                        onHoverEnd={e => {}}
                         className="flex flex-col bg-neutral-800 w-[15%]  justify-center items-center ml-[5%] mt-[2%] rounded-2xl">
                            <div>
                                <img src="/images/cover1.png" />
                            </div>
                            <div className="font-medium text-base text-white">
                                Daily Mix 3
                            </div>
                            <div className="text-zinc-500 text-sm text-center">
                                Honey Singh, Sidhu Moosewala, Wazir Patar etc.
                            </div>

                        </motion.div>

                        <motion.div 
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => {}}
                        onHoverEnd={e => {}}
                        className="flex flex-col bg-neutral-800 w-[15%] justify-center items-center ml-[5%] mt-[2%] rounded-2xl">
                            <div>
                                <img src="/images/cover2.png" />
                            </div>
                            <div className="font-medium text-base text-white">
                                Daily Mix 3
                            </div>
                            <div className="text-zinc-500 text-sm text-center">
                                Honey Singh, Sidhu Moosewala, Wazir Patar etc.
                            </div>

                        </motion.div>

                        <motion.div
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => {}}
                        onHoverEnd={e => {}}
                         className="flex flex-col bg-neutral-800 w-[15%] justify-center items-center ml-[5%] mt-[2%] rounded-2xl">
                            <div>
                                <img src="/images/cover3.png" />
                            </div>
                            <div className="font-medium text-base text-white">
                                Daily Mix 3
                            </div>
                            <div className="text-zinc-500 text-sm text-center">
                                Honey Singh, Sidhu Moosewala, Wazir Patar etc.
                            </div>

                        </motion.div>

                        <motion.div
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => {}}
                        onHoverEnd={e => {}}
                         className="flex flex-col bg-neutral-800 w-[15%] justify-center items-center ml-[5%] mt-[2%] rounded-2xl">
                            <div>
                                <img src="/images/cover4.png" />
                            </div>
                            <div className="font-medium text-base text-white">
                                Daily Mix 3
                            </div>
                            <div className="text-zinc-500 text-sm text-center">
                                Honey Singh, Sidhu Moosewala, Wazir Patar etc.
                            </div>

                        </motion.div>

                        <motion.div
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={e => {}}
                        onHoverEnd={e => {}}
                         className="flex flex-col bg-neutral-800 w-[15%] justify-center items-center ml-[5%] mt-[2%] rounded-2xl">
                            <div>
                                <img src="/images/cover5.png" />
                            </div>
                            <div className="font-medium text-base text-white">
                                Daily Mix 3
                            </div>
                            <div className="text-zinc-500 text-sm text-center">
                                Honey Singh, Sidhu Moosewala, Wazir Patar etc.
                            </div>

                        </motion.div>
                        
                    </div>
                </div>

            </div>
        </div>
        
    </div>    
)   

export default Landing