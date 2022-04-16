import React from 'react';
import {Header} from './components/Header/Header';
import { MainContainer } from './components/MainContainer/MainContainer';
import { Footer } from './components/Footer/Footer';
import './style.css';

function App () {
    return (
        <>
            <Header />
            <MainContainer />
            <Footer />
        </>
  )
}


export default App;