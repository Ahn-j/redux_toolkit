import { createSlice } from "@reduxjs/toolkit";
import carData from "../../data/carData";

//리덕스 툴킷에서는 액션과 리듀서를 슿라이스 함수에 한번에 정의
//리덕스와 다름

//액션과 리듀서를 정의하는 함수
const initialState = {
  carModels: carData,
  totalQuantity: 0,
  totalValue: 0,
  isLoading: true,
};

//state초기값, 슬라이스이름, 리듀서 가 정의됨
const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    //액션크리에이터와 액션 타입이 만들어짐
    clearModels: (state) => {
      state.carModels = [];
    },
    removeModel: (state, { payload }) => {
      state.carModels = state.carModels.filter(
        (model) => model.id !== payload.id
      );
    },
    increase: (state, { payload }) => {
      const carModel = state.carModels.find((model) => model.id === payload.id);
      carModel.quantity = carModel.quantity + 1;
    },
    decrease: (state, { payload }) => {
      const carModel = state.carModels.find((model) => model.id === payload.id);
      carModel.quantity = carModel.quantity - 1;
    },
    calculateTotals: (state) => {
      let totalQuantity = 0;
      let totalValue = 0;
      state.carModels.forEach((model) => {
        totalQuantity += model.quantity;
        totalValue += model.quantity * model.price;
      });
      state.totalQuantity = totalQuantity;
      state.totalValue = totalValue;
    },
  },
});

export const { clearModels, removeModel, increase, decrease, calculateTotals } =
  carSlice.actions;
export default carSlice.reducer;