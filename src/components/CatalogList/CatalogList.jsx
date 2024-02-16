import React from "react";
import { v4 as uuidv4 } from "uuid";
import "./catalog.scss";

const CatalogList = ({ cars }) => {
  return (
    <ul className="ctlgList">
      {cars &&
        cars.map((data) => {
          return (
            <li
              className="ctlgEl"
              key={uuidv4()}
              onClick={() => console.log(data.id)}
            >
              <div className="imgBox">
                <img
                  src={data.img}
                  alt={`${data.make} ${data.model}`}
                  className="carImage"
                />
              </div>
              <div className="titleBox">
                <p className="carName">
                  <span className="make">{data.make} </span>{" "}
                  {data.model && <span className="model">{data.model}</span>},{" "}
                  <span className="make">{data.year} </span>
                </p>
                <span className="make">{data.rentalPrice} </span>
              </div>
            </li>
          );
        })}
    </ul>
  );
};

export default CatalogList;
