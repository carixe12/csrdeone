import LocationOnIcon from "@mui/icons-material/LocationOn";
import logo from "./logo.svg";
import { CardComponent } from "./CardCompont";

import { FC } from "react";
interface IProps {
  title: string;
  territorry: string;
  description: string;
 
}

export const Card: FC<IProps> = (props) => {
  return (
    <body>
      <div className="container">
        <div className="row">
          <div className="card">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="logo"> Слой</p>
            <h2 className="text1"> {props.title} </h2>
            <p className="text3"> {props.territorry} </p>
            <LocationOnIcon
              className="icon"
              sx={{
                color: "gray",
                fontSize: 15,
              }}
            />
            <h4 className="text4"> {props.description} </h4>
           
            <CardComponent schedual={{
              title: "4 квартал 2022",
              price: 28000,
              uname: " MSDS_CNT_NVSB_2021Q3_V1 "
            }}            />
          </div>
        </div>
      </div>
    </body>
  );
};
