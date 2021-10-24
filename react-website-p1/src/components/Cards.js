import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out everything Dark Souls has to offer.</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-9.jpg"
              text="Explore the deadly world within"
              label="Adventure"
              path="/services"
            />
          </ul>

          <ul className="cards__items">
            <CardItem
              src="images/img-2.jpg"
              text="Fight till your last breath"
              label="Despair"
              path="/services"
            />
            <CardItem
              src="images/img-1.jpg"
              text="Reach places of grandeur"
              label="Hopefulness"
              path="/services"
            />
            <CardItem
              src="images/img-8.jpg"
              text="See everything the land has to offer"
              label="Vastness"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
