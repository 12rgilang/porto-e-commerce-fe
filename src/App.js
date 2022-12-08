// Utilities
import './supports/stylesheets/utilities.css'

import { Routes, Route } from 'react-router-dom';
import {GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut} from 'firebase/auth'
  import {auth} from './firebase'

import Navbar from "./components/navbar";
import Register from "./pages/register/register";
import Login from './pages/login/login';
import Home from './pages/home/home';
import { useState } from 'react';
import toast, {Toaster} from 'react-hot-toast'
import axios from 'axios';
import { useEffect } from 'react';
import DetailProduct from './pages/detail/detail';
import Menu from './pages/menu/menu';
import { async } from '@firebase/util';
import Cart from './pages/cart/cart';
import NotFound from './pages/notfound/404';

const provider = new GoogleAuthProvider();

export default function App(){

  const [username, setUsername] = useState('')
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    checkIsLogin()
  }, [])

  let checkIsLogin = async() => {
    try {
      let getTokenId = localStorage.getItem('token')
      if(getTokenId){
        let response =  await axios.get(`https://my-json-server.typicode.com/12rgilang/jsonserver-deployment-trial/users?id=${getTokenId}`)
        setUsername(response.data[0].username)
        setRedirect(true)
      }
    } catch (error) {
      toast.error(error.message)
      console.log(error.message)
    }
    // ini jika mengambil dua data yaitu id dan username
    // let getToken = JSON.parse(localStorage.getItem('token')) //JSON hanya menerima string, sehingga object yang diambil dari data base harus diubah terlebih dahulu, dari object menjadi string
    // if(getToken){ // pengkondisian disini untuk mendapatkan apabila token nya ada dalam local storage, maka akan tetap sign in
    // setUsername(getToken.username) 
    // setRedirect(true)
  }

  let onLoginWithGoogle = async() => {
    try {
      let response = await signInWithPopup(auth, provider)
      setUsername(response.user.displayName)
      setRedirect(true)
     
      localStorage.setItem('tokenUid', `${response.user.uid}` )
    } catch (error) {
      console.log(error.message)
    }
  }

  // let onSignOut = async() =>{
  //   try {
  //     await signOut(auth)
  //     setUsername('')
  //   } catch (error) {
  //     console.log(error.message)
  //   }
  // }

  onAuthStateChanged(auth, (userFromFireBase) => {
    if(userFromFireBase){
      setUsername(userFromFireBase.displayName)
    }
  })

  let onLogin = async(inputUsername, inputPassword) => {
    try {
      console.log("bebas")
        // step.1 get input Value
        // let inputUsername = username.current.value // input username dan password ini akan dipanggil pada saat on click di page login
        // let inputPassword = password.current.value
        // step.2 check if Username & Password exist?
        let response = await axios.get(`https://my-json-server.typicode.com/12rgilang/jsonserver-deployment-trial/users?username=${inputUsername}&password=${inputPassword}`)
        if(response.data.length === 0) throw{message: "Account not found"}
        // let dataToSave = {
        //   id: response.data[0].id,
        //   username: response.data[0].username // [0] arrray 0 karena data yang diberikan dari server hanya 1 index
        // } jika menggunakan username, mmaka harus dimasukkan kedalam variable
        localStorage.setItem('token', `${response.data[0].id}` ) // JSON.stringify(dataToSave) stringify untuk merubha object menjadi string 
        setUsername(response.data[0].username)
        toast.success('Login Success.')
        setTimeout(() => {
          setRedirect(true)
        }, 2000)

    } catch (error) {
        toast.error(error.message)
    }
}

let onLogout = async() => {
  try {
      localStorage.removeItem('token')
      setUsername('') // dan merubah username menjadi string kosong
      setRedirect(false)
      await signOut(auth)
      localStorage.removeItem('tokenUid')
      setUsername('')
      setRedirect(false) // jadi ketika ke trigger clik button logout maka redirect akan false
  } catch (error) {
    
  }
  
  
}


  return(
    <>
      <Navbar data={{username}} myFunc={{onLogout}} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register isRedirect={{redirect}} />} />
        <Route path='/login' element={<Login myFunc={{onLogin}} myGoogle={{onLoginWithGoogle}} isRedirect={{redirect}}/>} />'
        <Route path='/menu' element={<Menu />} />
        <Route path='/product/:id' element={<DetailProduct />} />
        <Route path='/cart' element={<Cart />} /> 
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}
