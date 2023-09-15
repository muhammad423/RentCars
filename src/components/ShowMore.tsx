'use client'
import { useRouter } from 'next/navigation'
import { ShowMoreProps } from '@/types/interfaces'
import React from 'react'
import { CustomBtn } from '.'
import { updateSerchParams } from '@/utils/carsApi'

const ShowMore = ({pageNumber, isNext}:ShowMoreProps) => {
    const router = useRouter()
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10
        const newPathName = updateSerchParams('limit', `${newLimit}`)
        router.push(newPathName)
    }
  return (
    <div className=' flex items-center justify-center mt-10'>
        {
            !isNext && <CustomBtn  customCls='px-4 py-2  text-center bg-[#3E977C] hover:bg-[#2B7257] text-white text-base font-medium rounded-full' title='Show More' handleClick={handleNavigation}/>
        }
        
        </div>
  )
}

export default ShowMore