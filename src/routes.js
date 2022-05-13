import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './features/Login/Login'
import Register from './features/Register/Register'
import Home from './features/LandingPage/Home'
import Dashboard from './features/Dashboard/Dashboard'
import Root from './features'

export default function Router(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Root/>} />
                    <Route path='/home' element={<Home/>} />
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/dashboard' element={<Dashboard/>}/>
                    <Route path='*' element={<h1>404 Page Not Found</h1>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}