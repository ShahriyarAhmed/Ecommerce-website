import React,{useState} from 'react'
import './Register.css'
import {Link,useHistory} from 'react-router-dom'
import Axios from 'axios';
import swal from 'sweetalert';
import Login from './Login';

function Register() {
    const history=useHistory();
    const [fname,setFname]= useState('');
    const [lname,setLname]= useState('');
    const [address,setAddress]= useState('');
    const [pcode,setPostalCode]= useState('');
    const [customer,setcustomer]=useState([]);
    const [age,setAge]= useState('');
    const [pnumber,setPhone]= useState('');
    const [city,setCity]= useState('');
    const [password,setPassword]= useState('');
    const register = e => {
        e.preventDefault()
        if(fname.length>0 && address.length>0 && lname.length>0 && pnumber.length>0 && city.length>0 && pcode.length>0 && password.length>0){
        Axios.post("http://localhost:3001/customer/signup",
        {fname:fname,lname:lname,address:address,pnumber:pnumber,city:city,pcode:pcode,password:password}).then((response)=>{
            setcustomer(response.data);
          console.log(response.data);
            if(response.data.affectedRows>0)
                history.push('/Login');

            else{
               window.location.reload(true);
            }
        })
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
        <div className='register'>
            <Link to= '/'>
            <img 
            className='register__logo'
            src='https://purepng.com/public/uploads/large/amazon-logo-s3f.png'/>
            </Link>
            <div className='register__container'>
                <h1>SIGN UP</h1>
                <h1>Customer</h1>
                <form>
                    <h5>First Name</h5>
                    <input type='text' value={fname} onChange={e => setFname(e.target.value)}/>

                    <h5>Last Name</h5>
                    <input type='text' value={lname} onChange={e => setLname(e.target.value)} />

                    <h5>Address</h5>
                    <input type='text' value={address} onChange={e => setAddress(e.target.value)}/>

                    <h5>Postal Code</h5>
                    <input type='number' value={pcode} onChange={e => setPostalCode(e.target.value)}/>

                    <h5>Age</h5>
                    <input type='number' value={age} onChange={e => setAge(e.target.value)}/>

                    <h5>Phone number</h5>
                    <input type='number' value={pnumber} onChange={e => setPhone(e.target.value)}/>

                    <h5>City</h5>
                    <input type='text' value={city} onChange={e => setCity(e.target.value)}/>
                    

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type='submit' onClick={register} className='register__signUpButton'>Create Your Account</button>
                </form>
                <p>
                    By registering you agree to the terms and conditions of our Project.
                </p>
            </div>
        </div>
    )
}

export default Register
