 'use client'

import React, {useState} from 'react'
import Image from 'next/image'
import car from '../../public/car1.png'
import fwd from '../../public/drive.png'
import mpg from '../../public/mpg.png'
import automatic from '../../public/stering.png'
import { CarProps } from '@/types/interfaces'
import { CarsDetail, CustomBtn } from '.'
import { genereteCarsUrl } from '@/utils/carsApi'

interface CarsCardProps {
    cars: CarProps
}

const CarsCard = ({cars}:CarsCardProps) => {
    const [open, setOpen] = useState(false);
    const {city_mpg, year, make, model, transmission, drive} = cars
    

  return (
      <>
        <div className=' bg-gray-100  w-full p-2 hover:shadow-xl shadow-lg'>
        <h5 className=' font-semibold text-xl'>{make} {model}</h5>
        <div className='my-3'>
            <sup className='text-sm'>$</sup>
            <span className='font-bold text-xl mt-2'>56</span>
            <sub className='text-sm'>/day</sub>
        </div>
          <div className='w-full h-40 relative object-contain'>
          <Image src={genereteCarsUrl(cars)} fill priority alt='car' className=' object-contain'/>
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex flex-col items-center justify-center gap-1'>
            <Image  src={automatic} alt='drive' width={20} height={20}/>
            <p className='text-sm font-semibold text-gray-700'>{transmission === 'a' ? 'Automatic' : 'manual'}</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-1'>
            <Image src={fwd} alt='drive' width={20} height={20}/>
            <p className='text-sm font-semibold text-gray-700'>{drive.toUpperCase()}</p>
            </div>
            <div className='flex flex-col items-center justify-center gap-1'>
            <Image src={mpg} alt='drive' width={20} height={20}/>
            <p className='text-sm font-semibold text-gray-700'>{city_mpg} MPG</p>
            </div>
          </div>
          <CustomBtn customCls='w-full py-2 mt-3 bg-[#3E977C] hover:bg-[#2B7257] text-white text-base font-medium rounded-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2B7257]' title='Show more' handleClick={() => setOpen(true)}/>
        </div>
        <CarsDetail  open={open} closeModel={() =>setOpen(false)} cars={cars}/>
        </>
  )
}

export default CarsCard