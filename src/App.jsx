import React from 'react';
import './App.css';
import Header from './components/componentBricks/header';
import GlobalStyle from './components/componentsStyle/globalStyles/globalStyle.jsx';
import SliderSection from './components/componentBricks/sliderSection';
import InformationSection from './components/componentBricks/informationSection.jsx'
import NewsSection from './components/componentBricks/newsSection.jsx';


function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <SliderSection />
            <NewsSection />
            <InformationSection />
        </>
    )
}

export default App;
