import AlbumList from '@/app/components/albumList'
import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "about us",
  description: "testing next ",
};
const page = () => {
  return (
    <div>
      <div className='text-3xl mt-4 mb-4'>about page</div>
      <AlbumList/>
    </div>
  )
}

export default page