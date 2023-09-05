import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Log from './Log';
import Banner from './components/Banner';
import Experts from './components/Experts';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Cards from './components/Cards';
import CookieBanner from './components/CookieBanner';


function App(){
    return(
        <>
        
        <BrowserRouter>
        <Header/>

        <Routes>
            <Route path="/" element ={<Banner />} />
            <Route path="/login" element = {<Log />}/>

        </Routes>
       </BrowserRouter>
       <Experts/>
        <Newsletter/>
        <Cards/>
        <Footer/>
        <CookieBanner/>
        </>
    );
}

export default App;
