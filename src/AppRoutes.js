import React,{Routes,Route} from 'react';
import { Home } from './Pages/Home';
import { Index } from './Pages/Index';
import { NotFound } from './Pages/NotFound';

export const AppRoutes = () => {
    return (
        <>
        <Routes>
            <Route path="/" element={<Index/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route element={<NotFound/>}/>
        </Routes>
        </>
    )
}