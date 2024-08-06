import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



export const Header = () => {
    const [windowSize , setWindowsize] = useState()
    const handleWindow = () =>{
        setWindowsize(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener('resize',handleWindow)
        return()=> window.removeEventListener('resize',handleWindow)
    },[])
    
    
    return (
    <>
        { windowSize < 700 ? (
        <>
        <nav className="nav">
            <div className="logo"><Link to="/"><img src="https://www.venturi-group.com/vault/images/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeHBMeWc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--9146459606380c9135d9a132274d72774cd32a16" alt="logo" /></Link></div>
            <div className="search"><input type="search" placeholder="What´s search today?" /></div>
        </nav>
        <footer className="menu">
            <div>
                <Link to="/">
                    <img src="src/components/header/home.png" alt="" />
                </Link>
            </div>
            <div>
                <Link to="/shopping-cart">
                    <img src="src/components/header/shopping-cart.png" alt="" />
                </Link>
            </div>
            <div>
                <Link to="/access">
                    <img src="src/components/header/user.png" alt="" />
                </Link>
            </div>
        </footer>
        </>) : ( 
        <nav className="nav">
            <div className="logo-laptop"><Link to="/"><img src="https://www.globant.com/themes/custom/globant_corp_theme/images/2019/globant-logo-dark.svg" alt="logo" /></Link></div>
            <div className="search"><input type="search" placeholder="What´s search today?" /></div>
            <div className="list">
                <ul className="list-menu">
                    <li>
                    <Link to="/">Home</Link></li>
                    <li><Link to="/shopping-cart">Cart</Link></li>
                </ul>
            </div>
            <div className="access">
            <Link to="/access"><button>Access</button></Link>
            </div>
        </nav>) 

        }
    </>
    )
}
