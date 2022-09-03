import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'
import Axios from 'axios';
import Bill from './bill';
import {Link, useHistory} from 'react-router-dom'

function Subtotal() {
    let history=useHistory();
    const [{basket},dispatch]= useStateValue()
    const func=()=>{

    }
    const createbill = () => {
        const cid=localStorage.getItem("abc");
        Axios.post("http://localhost:3001/create/bill",{cid:cid});
        //setTimeout(func,10000);
        //Axios.post("http://localhost:3001/delete/cart",{cid:cid});
        history.push('/Bill')
    }
    return(
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                <>
                    <p>
                    {/* Part of the homework */}
                    Subtotal ({basket.length} items): <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains a gift
                    </small>
                </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={createbill}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
