import { Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage";

function App(){

  return (
    <div>
      <Routes>

      <Route path="/lms-frontend/" element={<HomePage />} ></Route>
          
      </Routes>
    </div>
  )
}
export default App;