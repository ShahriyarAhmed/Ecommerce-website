import './supplier add.css';
import Axios from 'axios';
import React, {useState,useEffect}from "react";
import swal from 'sweetalert';

function Supplieradd() {
const [productname, setname] = useState("");
const [cat,setcat]=useState("");
const [qty,setqty]=useState("");
const [price,setprice]=useState("");
const [supplier,setsp]=useState("");

const addproduct=()=>{
  if(productname.length>0 && cat.length>0 &&  qty.length>0 && price.length>0 && supplier.length>0){

  Axios.post('http://localhost:3001/supplier/add',
  {productname: productname,cat:cat,qty:qty,price:price,supplier:supplier}
  ).then(()=>{
    alert('success')
  });
  }
  else{
    swal({
      title:'Missing values',
      text:"some field values are miss \n please fill them",
      icon:"error"
  })
  }
}
  return (
  
    <div className="App">
      <h1> supplier webpage</h1>
      <div className="supplierform">
        <label>Name:</label>
        <input type="text" name="productname" onChange={(e)=>{ 
            setname(e.target.value);
        }} />
        <label>category:</label>
        <input type="text" name="productcat"onChange={(e)=>{ 
            setcat(e.target.value);
        }}/>
        <label>quantity:</label>
        <input type="text" name="productqt" onChange={(e)=>{ 
            setqty(e.target.value);
        }}/>
        <label>price:</label>
        <input type="text" name="productprice"onChange={(e)=>{ 
            setprice(e.target.value);
        }}/>
        <label>suplier name:</label>
        <input type="text" name="s_id" onChange={(e)=>{ 
            setsp(e.target.value);
        }}/>

        <button  onClick={addproduct}>submit</button>
      </div>
    </div>
  );
}

export default Supplieradd;
