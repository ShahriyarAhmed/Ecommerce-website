import React,{useEffect,useState} from "react";
import "./Product.css";
import Axios from 'axios'

function Productadmin({id,title, image, price, rating}) {
    const addproduct=()=>{
        Axios.post('http://localhost:3001/admin/add',{id:id}
        ).then(()=>{
            alert("success");
        })
    }

    const rejectproduct=()=>{
      Axios.post('http://localhost:3001/admin/reject',{id:id}
      ).then(()=>{
          alert("success");
      })
  }
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
            {Array(rating).fill().map((_,i)=>(
                <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />
      <button classname="button" onClick={addproduct}>Approve</button>
      <button classname="button" onClick={rejectproduct}>reject</button>
    </div>
  );
}

export default Productadmin;
