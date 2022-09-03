import Axios from "axios";
import React, { useEffect, useState } from "react";


function Bill() {
    const [bill,setbill]=useState("");
    const [customer,setcustomer]=useState([]);
    useEffect(()=>{
    var c=localStorage.getItem("abc");

    Axios.post("http://localhost:3001/get/bill",{cid:c}).then((response)=>{
    setbill([]);
    setbill(response.data[0].total);
    console.log(response.data);
})

}, []);

useEffect(()=>{
    var c=localStorage.getItem("abc");
    Axios.post("http://localhost:3001/get/cus",{cid:c}).then((response)=>{
        setcustomer(response.data);
        console.log(response);
    })
},[]);
// Axios.post("http://localhost:3001/get/cus",{cid:c}).then((response)=>{
//     setcustomer(response.data);
//     console.log(response);
// })
return(
    <div >

    <div>
    {customer.map((val)=>{
            return <h1>First name={val.fname}</h1>
        })}
    </div>
    <div>
    {customer.map((val)=>{
            return <h1>last name={val.lname}</h1>
        })}
    </div>
    <div>
    {customer.map((val)=>{
            return <h1>address={val.address}</h1>
        })}
    </div>
    <div>
    {customer.map((val)=>{
            return <h1>city={val.city}</h1>
        })}
    </div>
    <div>
    {customer.map((val)=>{
            return <h1>postal code={val.postalcode}</h1>
        })}
    </div>
    <div>
        <h1>total={bill}</h1>
        </div>
    </div>

        
);
}
export default Bill