import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CarDetail from './page/CarDetail'
import Cars from './page/Cars'
import Home from './page/Home'

export default function Router(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/cars' element={<Cars/>} />
                    <Route path='/cars/:id' element={<CarDetail/>}/>
                    <Route path='*' element={<h1>404 Page Not Found</h1>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}