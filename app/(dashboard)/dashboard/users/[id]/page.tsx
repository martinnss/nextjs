import React from 'react'

interface Props {
  params: {
    id: string
  }
}


//                              id pq lo pusimos entre []
const page = ({params}:Props) => {
    const {id} = params;

  return (
    <div className='text-3xl'>USERS PAGE: {id}</div>
  )
}

export default page