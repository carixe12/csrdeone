import { FC } from "react";
interface ICardCompontProps {
  schedual: { title: string; price: number; uname: string , } ;
}

export function CardComponent ( {  schedual: { title, price, uname }}: ICardCompontProps )
{
  return (
    <div>
      <h2 className="text7"> Актуальные периоды (50): </h2>
      <ol className="table1">
        <li> {title} </li>
        <h5 className="subtitle"> {uname} </h5>
        <h5 className="price">{price}</h5>
        <br />
        <li> {title} </li>
        <h5 className="subtitle"> {uname} </h5>
        <h5 className="price">{price}</h5>
        <br />

        <li> {title} </li>
        <h5 className="subtitle"> {uname} </h5>
        <h5 className="price">{price}</h5>
        <br />
      </ol>
    </div>
  );
};

export default CardComponent