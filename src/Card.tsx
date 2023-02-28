import LocationOnIcon from "@mui/icons-material/LocationOn";
import logo from "./logo.svg";

import { FC } from "react";
interface IProps {
    title1:string,
    title2: string,
    territorry: string,
    description: string,
    description1:string,
    description2: string,
    title: string,
    peice: number,
    uname: string,
};

export const Card : FC<IProps> = (props) => {
    return (
        <body>
    <div className="container">
      <div className="row"> 
      <div className="card">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='logo'> Слой</p>
        <h2 className="text1"> {props.title1} </h2>
        <h2 className="text2"> {props.title2} </h2>
        <p className="text3"> {props.territorry} </p>
        <LocationOnIcon className="icon"
          sx={{
            color: "gray",
            fontSize: 15,
          }} />
          <h4 className='text4'> {props.description} </h4>
        <h4 className='text5'> {props.description1}  </h4>
         <h4 className='text6'> {props.description2} </h4>

         <h2 className="text7"> Актуальные периоды (50): </h2>
            <ol className='table1'>
              <li> {props.title}  </li>
              <h5 className='subtitle'> {props.uname} </h5>
              <h5 className='price'>{props.peice}</h5>
              <br />
              <li > {props.title} </li>
              <h5 className='subtitle'> {props.uname}  </h5>
              <h5 className='price'>{props.peice}</h5>
              <br />

              <li> {props.title}  </li>
              <h5 className='subtitle'> {props.uname}  </h5>
              <h5 className='price'>{props.peice}</h5>
              <br />

              </ol>

         </div>
      </div>
    </div>
    </body>
    );
}
