import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home/Home';
import { Crew } from '../pages/crew/Crew';
import { Destination }  from '../pages/destination/Destination';
import  { NotFound }  from '../components/notFound/NotFound';
import { Layout } from '../components/layout/Layout';
import { TechnologyComponent } from '../components/technology/TechnologyComponent';

const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path={"home"} element={<Navigate to="/"/>}/>
                        <Route path={"destination"} element={<Destination/>}/>
                        <Route path={"crew"} element={<Crew/>}/>
                        <Route path={"technology"} element={<TechnologyComponent/>}/>
                    </Route>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter;