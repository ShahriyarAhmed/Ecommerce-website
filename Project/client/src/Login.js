import React,{useState} from 'react'
import './Login.css'
import {Link, useHistory} from 'react-router-dom'
import Axios from 'axios'
import swal from 'sweetalert';
import App from './App';
import Adminadd from './adminadd';
import Register from'./Register';


function Login() {

    let history=useHistory();
    const [username,setun]= useState('');
    const [table,settable]= useState('');
    const [customer,setcustomer]=useState([]);
    const [password,setPassword]= useState('');
    const [open, setOpen] = React.useState(false);
    const register = e =>{
        history.push('/Register');
    } 
    const signIn = e => {
        e.preventDefault()
        if(password.length>0 && username.length>0){
        //console.log(table);
        Axios.post("http://localhost:3001/customer/login",{username:username,password:password}
        ).then((response)=>{
          setcustomer(response.data);
          //console.log(response.data[0].id);
            if(response.data.length>0)
            {   localStorage.setItem("abc",response.data[0].id)
                console.log(username);
                history.push('/Home2'); 
            }
            else{
                swal({
                    title: "Wrong Credentials",
                    text:"your entered username and password could not be found in database",
                    icon: "error",
                  });
            }
        })
    }
    else{
        if(password.length==0 && username.length==0){
            swal({
                title: "both fields required",
                icon: "error",
              });
        }
        
        else if(username.length==0){
            swal({
                title: "username required",
                icon: "error",
              });
        }
        else if(password.length==0){
            swal({
                title: "password required",
                icon: "error",
              });
        }
    }
    }
   
    return (
        <div className='login'>
            <Link to= '/'>
            <img 
            className='login__logo'
            src='https://purepng.com/public/uploads/large/amazon-logo-s3f.png'/>
            </Link>

            <div className='login__container'>
                <h1>SIGN IN</h1>
                <form>
                    <h5>Username</h5>
                    <input type='text' value={username} onChange={e => setun(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the terms and conditions of our Project.
                </p>
                <button className='login__registerButton' onClick={register}>Create Your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
