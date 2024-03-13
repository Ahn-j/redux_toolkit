import React from 'react'
import { FaCarAlt } from "react-icons/fa";
import { useSelector } from "react-redux";

const NavBar = () => {
  //스토어에서 상태값을 부름
  //최상위첨포넌트(app)에서 상태값이 변경되는 처리를 했으니까 적용됨 
  const { totalQuantity } = useSelector((store)=>store.cars)

  return (
    <div className='bg-orange-800 text-neutral-50 flex justify-around'>
      <div className='flex'>
        <h3 className='p-4 text-2xl'>Redux Toolkit</h3>
      </div>
      <div className='p-4 text-3xl flex'>
        <FaCarAlt />
        <p className='ml-4 text-2xl'>{totalQuantity}</p>
      </div>
    </div>
  )
}

export default NavBar