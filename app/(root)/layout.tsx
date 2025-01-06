import React from 'react'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
        <div className='text-5-xl'>navbar only for (root) childrens</div>
        {children}
        <div className='text-5-xl'>footer only for (root) childrens</div>
    </div>
  )
}

export default layout