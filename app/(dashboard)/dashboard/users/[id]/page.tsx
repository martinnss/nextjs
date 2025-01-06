import React from 'react'

//                              id pq lo pusimos entre []
const page = ({params}:{params: {id:string} }) => {
    const {id} = params;

  return (
    <div className='text-3xl'>USERS PAGE: {id}</div>
  )
}

export default page