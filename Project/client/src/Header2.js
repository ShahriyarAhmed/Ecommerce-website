import React,{useEffect,useState} from 'react'
import './Header2.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link, useHistory } from 'react-router-dom';
import {useStateValue} from "./StateProvider"
import Adminadd from './adminadd';
import Axios from 'axios';
import Home from './Home';
import swal from 'sweetalert'

function Header2() {
    
    let history=useHistory();
    const [search,setsearch]=useState("");

    const setval=()=>{
        console.log(search);
        localStorage.setItem("vOneLocalStorage", search);
        history.push("/search");
    }
    const signOut=e=>{
        e.preventDefault()
        localStorage.clear()
        history.push('/Home');
        window.location.reload();
        
    }
    
    const [{basket}, dispatch] = useStateValue()
    return (
        <div className='header'>
            <Link to="/">
            <img
                className="header__logo" 
                src='https://www.mabaya.com/wp-content/uploads/2019/10/amazon_PNG25.png' 
            />
            </Link>
            <div className="header__search">
                <input
                className="header__searchInput" type="text"  onChange={(e)=>{ 
                    setsearch(e.target.value);}}/>
                <SearchIcon className="header__searchIcon" onClick={setval}/>
            </div>

            <div className="header__nav">
                <div className='header__option'>
                    <button className='header__optionLineOne' onClick={signOut}>Sign Out</button>
                </div>
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon/>
                        <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Header2
