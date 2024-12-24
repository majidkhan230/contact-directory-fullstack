import React from 'react'
import { routes } from './routes'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>

    <Routes>
      {routes.map((item,index)=>(
        <Route key={index} element={item.element} path={item.path} ></Route>
      ))}
    </Routes>





    </div>
  )
}

export default App