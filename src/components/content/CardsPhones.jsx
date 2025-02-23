import { useEffect, useState } from 'react';
import { CardPhone } from './CardPhone';
import { getPhones } from '../../services/getPhones';

export const CardsPhones = () => {
    const [phones, setPhones] = useState([]);
    const [isFiltered , setIsFiltered] = useState(false)
    const [phonesFilter, setPhonesFilter] = useState([])
    const [isLoading , setIsLoading] = useState()
    const filterButtons = document.querySelectorAll('.filter-button')
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(b => b.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    useEffect(() => {
        setIsLoading(true)
        getPhones('http://localhost:1234').then(phones =>{
            setPhones(phones)
            setIsLoading(false)
            
        })
    }, []);
    const showAll = () => setPhonesFilter(phones)
    const changeToBrandApple = () =>{
        const phonesBrandApple = phones.filter((phone)=> phone.brand === "APPLE")
        setPhonesFilter(phonesBrandApple)
        setIsFiltered(true)
    }
    const changeToBrandXiaomi = () => {
        const phonesBrandXiaomi = phones.filter((phone)=> phone.brand === "XIAOMI")
        setPhonesFilter(phonesBrandXiaomi)
        setIsFiltered(true)
    }
    const changeToBrandMotorola = () => {
        const phonesBrandMotorola = phones.filter((phone)=> phone.brand === "MOTOROLA")
        setPhonesFilter(phonesBrandMotorola)
        setIsFiltered(true)
    }
    const changeToBrandSamsung = () => {
        const phonesBrandSamsung = phones.filter((phone)=> phone.brand === "SAMSUNG")
        setPhonesFilter(phonesBrandSamsung)
        setIsFiltered(true)
    }
    const changeTo2gb = ()=> {
        const phonesRam2gb = phones.filter((phone)=> phone.ram === "2GB")
        setPhonesFilter(phonesRam2gb)
        setIsFiltered(true)
    }
    const changeTo4gb = ()=>{
        const phonesRam4gb = phones.filter((phone)=> phone.ram === "4GB")
        setPhonesFilter(phonesRam4gb)
        setIsFiltered(true)
    }
    const changeTo8gb = ()=>{
        const phonesRam8gb = phones.filter((phone)=> phone.ram === "8GB") 
        setPhonesFilter(phonesRam8gb)
        setIsFiltered(true)
    }
    const changeToStorage64gb = () => {
        const phonesRom64gb = phones.filter((phone)=> phone.rom === "64GB")
        setPhonesFilter(phonesRom64gb)
        setIsFiltered(true)
    }
    const changeToStorage128gb = () => {
        const phonesRom128gb = phones.filter((phone)=> phone.rom === "128GB")
        setPhonesFilter(phonesRom128gb)
        setIsFiltered(true)
    }
    const changeToStorage256gb = ()=> {
        const phonesRom256gb = phones.filter((phone)=> phone.rom === "256GB")
        setPhonesFilter(phonesRom256gb)
        setIsFiltered(true)
    }
    
    return (
        <div className='content-phones'>
            <aside className='filter-bar'>
                    <button className='filter-button' onClick={showAll} >All</button>
                    <button className='filter-button' onClick={changeToBrandApple}>Apple</button>
                    <button className='filter-button' onClick={changeToBrandXiaomi}>Xiaomi</button>
                    <button className='filter-button' onClick={changeToBrandMotorola}>Motorola</button>
                    <button className='filter-button' onClick={changeToBrandSamsung}>Samsung</button>
                    <button className='filter-button' onClick={changeTo2gb} >2GB</button>
                    <button className='filter-button' onClick={changeTo4gb}>4GB</button>
                    <button className='filter-button' onClick={changeTo8gb}>8GB</button>
                    <button className='filter-button' onClick={changeToStorage64gb}>64GB</button>
                    <button className='filter-button' onClick={changeToStorage128gb}>128GB</button>
                    <button className='filter-button' onClick={changeToStorage256gb}>256GB</button>
                

            </aside>
            {
                isLoading ? (
                    <section className='loading'>
                        <div className='loading-icon'></div>
                    </section>
                ):(
                    isFiltered ?
                        <main className='phones-cards'>
                            {phonesFilter.map((phone) => (
                                    
                                <CardPhone 
                                    key={phone.id}
                                    idPhone={phone.id}
                                    name={phone?.name}
                                    brand={phone?.brand}
                                    ram={phone.ram}
                                    rom={phone.rom}
                                    price={phone.price}
                                    img={phone.image}
                                />
                            ))}
                        </main> 
                        :             
                        <main className='phones-cards'>
                            {phones.map((phone) => (
                                    
                                    <CardPhone 
                                        key={phone.id}
                                        idPhone={phone.id}
                                        name={phone?.name}
                                        brand={phone?.brand}
                                        ram={phone.ram}
                                        rom={phone.rom}
                                        price={phone.price}
                                        img={phone.image}
                                    />
                            ))}
                        </main>
                            
                        
                )
            }
        </div>
    );
};
