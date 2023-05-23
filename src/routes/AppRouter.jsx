import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { Crew } from '../pages/crew/Crew';
import { Destination } from '../pages/destination/Destination';
import { Technology } from '../pages/technology/Technology';
import { NotFound } from '../components/notFound/NotFound';
import { Layout } from '../components/layout/Layout';

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"home"} element={<Home/>}/>
                    <Route path={"destination"} element={<Destination/>}/>
                    <Route path={"crew"} element={<Crew/>}/>
                    <Route path={"technology"} element={<Technology/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;