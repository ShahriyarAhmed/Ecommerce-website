import React,{useState,useEffect} from 'react'
import Axios from 'axios';
import Productadmin from './product admin'

function Adminadd(){
    const [products,setproducts]=useState([]);
    useEffect(()=>{
        Axios.get("http://localhost:3001/admin/product").then((response)=>{
            setproducts(response.data);
        })
    }, []);
    return (
        <div className="home__row">
                {products.map((val)=>{
                    return <Productadmin
                    id={val.id}
                    title={val.name}
                    price={val.price}
                    image={val.url}
                     />
                    })}
                </div>
    )
}

export default  Adminadd;