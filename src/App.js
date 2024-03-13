import NavBar from "./components/NavBar.js"
import Cars from "./components/Cars.js";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//액션을 임포트
import { calculateTotals } from "./features/cars/carSlice.js";

//NavBar는 이 앱컴포넌트의 하위컴포넌트임
//리덕스를 사용할때는 최대한 최상위 컴포넌트에서 스토어를 부르는걸 권장한다
//하지만 상황에따라서는 최상위가 아니라 하위 컴포넌트안에서 불러도 됨
function App() {
  //useSelector를 통해서 스토어안에 cars 이름으로저장되어있는리듀서를 부름 
  const { carModels } = useSelector((store)=>store.cars)
  //useDispatch를 통해서 디스패치함수를 가져옴
  const dispatch = useDispatch();
  useEffect(()=>{
    //스토어의 carModels이 변경할때마다 디스패치를 통해서 스토어에 액션을 넘김
    dispatch(calculateTotals())
  },[carModels, dispatch])
  return (
    <>
      <NavBar />
      <Cars />
    </>
  );
}

export default App;
