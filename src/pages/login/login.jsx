import axios from 'axios';
import { useState, useRef } from 'react';
import '../login/login.css'
import toast, {Toaster} from 'react-hot-toast'
import { Navigate } from 'react-router-dom';

let Login = (props) => {

    const username = useRef()
    const password = useRef()

    if(props.isRedirect.redirect){
        return <Navigate to='/' />
    }

    // function login dipindahkan pada parent element app.js
    // let onLogin = async() => {
    //     try {
    //         // step.1 get input Value
    //         let inputUsername = username.current.value ini dimasukkan kedalam component on click dibawah
    //         let inputPassword = password.current.value
    //         // step.2 check if Username & Password exist?
    //         let response = await axios.get(`https://my-json-server.typicode.com/12rgilang/jsonserver-deployment-trial/users?username=${inputUsername}&password=${inputPassword}`)
    //         if(response.data.length === 0) throw{message: "Account not found"}

    //         toast.success('Login Success.')
    //     } catch (error) {
    //         toast.error(error.message)
    //     }
    // }


    return(
        <div className="flex flex-col items-center py-20">
            <h1 className="my-fs-25 font-bold">
                Sign in
            </h1>
        
            <div className="cards mt-10 px-20 py-10 w-2/5 rounded-md flex flex-column justify-around">
                <p className='mb-3'>
                    *indicates required field
                </p>
                <input ref={username} type="text" placeholder='Username or email address' className='py-2 px-2 w-100 rounded-md' style={{border: '1px solid black'}} />
                <input ref={password} type="password" placeholder='Password' className='py-2 px-2 w-100 rounded-md mt-4 mb-3 flex-nowrap' style={{border: '1px solid black'}} />
                
                <div className='flex'>
                <input type="checkbox" className="mr-1" />Keep me sign in.<a href='#' className='items-center'> Details</a>
                </div>
                
                <a href='#' className='my-fs-15 font-bold mt-2 mb-3 my-main' >Forgot yout username ?</a>
                <a href='#' className='my-fs-15 font-bold my-main' >Forgot yout password ?</a>
                <div className="parent-button flex justify-end">
                    <button onClick={() => props.myFunc.onLogin(username.current.value, password.current.value)} className='my-bg-main w-25 my-light px-2 py-3 mt-3 mt-3 rounded-full self-y
                    end'>
                        Sign in
                    </button>
                    <button onClick={() => props.myGoogle.onLoginWithGoogle()} className='my-bg-main w-content my-light px-2 py-3 mt-3 ml-3 rounded-full self-end'>
                        Sign in With Google
                    </button>
                </div>
                
            </div>
            <Toaster />
        </div>
    )
}

export default Login;