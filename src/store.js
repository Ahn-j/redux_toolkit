import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./features/cars/carSlice"

//슬라이스에 어떤 리듀서가 있는지를 정의
//carReducer라는 이름의 리듀서를 cars라는 키로써 스토어에 등록
//이제 사용할때는 cars라는 키로 사용하면 carReducer 가 사용됨
export const store = configureStore({
  reducer: {
    cars: carReducer,
  }
})