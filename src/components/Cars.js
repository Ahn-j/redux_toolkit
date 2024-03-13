import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
//액션을 임포트
import { clearModels } from "../features/cars/carSlice";
import CarModel from './CarModel';

const Cars = () => {
  const { totalValue, carModels } = useSelector((store)=>store.cars);
  console.log(totalValue)
  const dispatch = useDispatch();
  return (
    <section>
      <header>
        <h2 className='text-center font-extrabold text-2xl p-10'>
          Available Models
        </h2>
      </header>
      <main>
        {carModels.map((car) => {
          return <CarModel key={car.id} {...car} />;
        })}
      </main>
      <footer className='text-center font-extrabold text-2xl p-10'>
        <h4>
          Total Value: <span>${totalValue.toFixed(0)}</span>
        </h4>
        <button
          className='rounded-lg border-2 border-orange-800 text-xl font-normal w-15 mt-5 p-4'
          onClick={() => dispatch(clearModels())}>
          Clear Warehouse
        </button>
      </footer>
    </section>
  )
}

export default Cars