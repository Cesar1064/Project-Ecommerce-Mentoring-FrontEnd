import { useParams } from "react-router-dom";
import { Header } from "../components/header/Header";
import { useEffect, useState } from "react";
import { getPhones } from "../services/getPhones";

export const PhoneDetail = () => {
    const [phone, setPhone] = useState([]);
    const { idPhone } = useParams();

    useEffect(() => {
        getPhones('http://localhost:1234').then(phones => setPhone(phones))
    }, []);
    const filteredPhone = phone.find(item => item.id == idPhone);
    console.log(phone)
    return (
        <>  
            <Header />
            {filteredPhone ? (
                <div className="detail-phone">
                    <h2 className="detail-phone-name">{filteredPhone.name}</h2>
                    <img className="detail-phone-img" src={filteredPhone.image} alt={filteredPhone.name}  />
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
