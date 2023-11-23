import './bootstrap';
import '../css/app.css'
import { useState } from "react";
import ReactDOM from 'react-dom/client';        
import Home from './Pages/Homepage/Home';
import Plantrip from './Pages/PlanTrip';
import { Guides } from './Pages/Guides';
import Map from './Pages/Homepage/Map';
import Movement from './components/bannerSVG';

ReactDOM.createRoot(document.getElementById('app')).render(     
    <Home />        
);
