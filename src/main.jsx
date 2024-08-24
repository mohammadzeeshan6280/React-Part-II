import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
// import SeriesDatas from './Components/SeriesDatas'
// import SeriesCardDestruturing from './Components/SeriesCardDestruturing'
// import ThirdPassingProps from './Components/ThirdPassingProps';
// import "./Components/ThirdStyle.css"
// import FourSeriesCard from './Components/FourSeriesCard'
// import FourBootstrapCss from './Components/FourBootstrapCss'
// import "./Components/FourStyle.css"
// import "./Components/FourStyle.module.css";

import FiveEvent from "./Components/FiveEvent"
// import FiveEventProps from './Components/FiveEventProps'
// import FiveEventPropagation from './Components/FiveEventPropagation'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <SeriesDatas/> */}
    {/* <SeriesCardDestruturing/> */}
    {/* <ThirdPassingProps/> */}
    {/* <section className='container'>
    <h1 className="card-heading">List of Best Netflix Series</h1>
    <ThirdPassingProps/>
    </section> */}
    {/* <section className='container'>
    <h1 className="card-heading">List of Best Netflix Series</h1>
    <FourSeriesCard/>
    </section> */}
    {/* <FourBootstrapCss/> */}
    <FiveEvent/>
    {/* <FiveEventProps/> */}
    {/* <FiveEventPropagation/> */}


   
  </React.StrictMode>,
)
