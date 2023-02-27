import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function App() {
  return (
    <body>
    <div className="container">
      <div className="row"> 
      <div className="card">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='logo'> Слой</p>
        <h2 className="text1"> Аренда коммерческой </h2>
        <h2 className="text2"> недвижимости </h2>
        <p className="text3"> Новосибирск </p>
        <LocationOnIcon className="icon"
          sx={{
            color: "gray",
            fontSize: 15,
          }} />
          <h4 className='text4'> Посмотрите сами - сколько новосибирцев </h4>
        <h4 className='text5'> регулярно проводят время на подобных  </h4>
         <h4 className='text6'> ресурсах и  </h4>

         <h2 className="text7"> Актуальные периоды (50): </h2>
            <ol className='table1'>
              <li> 4 квартал 2022  </li>
              <h5 className='subtitle'> MSDS_CNT_NVSB_2021Q3_V1 </h5>
              <h5 className='price'>28 000p</h5>
              <br />
              <li > 4 квартал 2022 </li>
              <h5 className='subtitle'> MSDS_CNT_NVSB_2021Q3_V1 </h5>
              <h5 className='price'>28 000p</h5>
              <br />

              <li>4 квартал 2022 </li>
              <h5 className='subtitle'> MSDS_CNT_NVSB_2021Q3_V1 </h5>
              <h5 className='price'>28 000p</h5>
              <br />

              </ol>

         </div>
      </div>
    </div>
    </body>
  );
}

export default App;
