import Addingproject from './components/Addingproject';
import './components/Potfolio.css'
import Potmain from './components/Potmain';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className='potmain' >
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Potmain/>}/>
      <Route path='addingproject' element={<Addingproject/>}/>


      </Routes>
      </BrowserRouter>
    </div>
  )
    

}

export default App;
