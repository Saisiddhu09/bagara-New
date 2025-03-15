import React from 'react'

const Page = () => {
  return (
    <iframe className='pt-4'
    src={`${process.env.PUBLIC_URL}/media/license.pdf`} 
    width="100%" 
    height="1000px" 
    style={{ border: 'none' }}
  />
  )
}

export default Page