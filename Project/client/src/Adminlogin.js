import React,{useState} from 'react'
import './Login.css'
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import {Link, useHistory} from 'react-router-dom'
import Axios from 'axios'
import App from './App';
import swal from 'sweetalert';
import Adminadd from './adminadd';
function Adminlogin() {

    let history=useHistory();
    const [id,setid]= useState('');
    //const [table,settable]= useState('');
    const [supplier,setsupplier]=useState([]);
    const [password,setPassword]= useState('');
    const [open, setOpen] = React.useState(false);
    const handleToClose = () => {
        setOpen(false);
      };
      const register = e =>{
        history.push('/RegisterSup');
    }
    const signInAdd = e => {
        e.preventDefault()
        //console.log(table);
        if(password.length>0 && id.length>0){
        Axios.post("http://localhost:3001/Admin/login",{id:id,password:password}
        ).then((response)=>{
          setsupplier(response.data);
          console.log(response.data);
            if(response.data.length>0)
                {
                history.push('/Adminadd');
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
        if(password.length==0 && id.length==0){
            swal({
                title: "both fields required",
                icon: "error",
              });
        }
        
        else if(id.length==0){
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
                <h2>Admin</h2>
                <form>
                    <h5>Id</h5>
                    <input type={Number} value={id} onChange={e => setid(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signInAdd} className='login__signInButton'>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the terms and conditions of our Project.
                </p>
            </div>
        </div>
    )
}

export default Adminlogin
