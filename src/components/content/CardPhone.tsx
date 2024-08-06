/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
interface CardPhoneProps {
  idPhone: number;
  name: string;
  brand: string;
  ram: string;
  rom: string;
  price: string;
  img: string;
}
export const CardPhone = ({
  idPhone,
  name,
  brand,
  ram,
  rom,
  price,
  img,
}: CardPhoneProps) => {
  return (
    <section className="card-phone">
      <Link to={`/phone/${idPhone}`}>
        <div>
          <h1 className="name-phone">{name}</h1>
          <article className="phone">
            <div className="img-phone">
              <img src={img} alt={name} />
            </div>
            <div className="specific-list">
              <ul>
                <h2 className="brand-phone">{brand}</h2>
                <li className="ram-phone">
                  <strong>RAM :</strong>
                  {ram}
                </li>
                <li className="rom-phone">
                  <strong>ROM :</strong>
                  {rom}
                </li>
              </ul>
              <button className="price-phone">{price}</button>
            </div>
          </article>
        </div>
      </Link>
    </section>
  );
};
