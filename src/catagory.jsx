import React from 'react'

export default function Catagory({finalcat,setCatname}) {
  let cat= finalcat.map((v,i)=>{
    return(
      <li onClick={()=>setCatname(v)} className='bg-[gray] text-lg p-[7px] cursor-pointer font-serif font-[500] mt-3' key={i}>{v}</li>
    )
    
  })
  return (
    <div>
      <h3 className='text-[20px] font-medium'>Product catagory</h3>
      <ul>
        {cat}
        
      </ul>
    </div>
  )
}
