import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import mock from "../assets/mocks/mock-smartphones.json";
import { Header } from "../components/header/Header";

interface Phone {
  id: number;
  name: string;
  brand: string;
  ram: string;
  rom: string;
  price: string;
  image: string;
  details: string;
}

export const PhoneDetail: React.FC = () => {
  const [phone, setPhone] = useState<Phone[]>([]);
  const { idPhone } = useParams();

  useEffect(() => {
    // getPhones("http://localhost:1234").then((phones) => setPhone(phones));
    setPhone(mock as Phone[]);
  }, []);

  const filteredPhone = phone.find((item) => item.id === Number(idPhone));
  console.log(phone);

  return (
    <>
      <Header />
      {filteredPhone ? (
        <div className="detail-phone">
          <h2 className="detail-phone-name">{filteredPhone.name}</h2>
          <img
            className="detail-phone-img"
            src={filteredPhone.image}
            alt={filteredPhone.name}
          />
          <p className="detail-phone-brand">Brand: {filteredPhone.brand}</p>
          <p className="detail-phone-ram">RAM: {filteredPhone.ram}</p>
          <p className="detail-phone-rom">Storage: {filteredPhone.rom}</p>
          <p>{filteredPhone.details}</p>
          <button className="detail-phone-price">{filteredPhone.price}</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};
