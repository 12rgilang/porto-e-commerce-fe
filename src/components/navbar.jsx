// Logo
import Logo from './../supports/assets/logo.png'

import './navbar.css'

import {MdLocationOn} from 'react-icons/md'
import { CgProfile } from 'react-icons/cg'

import {Link, useLocation} from 'react-router-dom'

export default function Navbar(props){
    const location = useLocation() // Digunakan untuk mendapatkan pathname
    return(
        <>
            <div className='navbar fixed w-screen flex px-10 '>
                <div className='flex items-center'>
                    <Link to='/'>
                        <img src={Logo} width='50px' height='50px' />
                    </Link>
                    {
                        location.pathname === '/register' || location.pathname === '/login' ?
                        null
                        :
                        <>
                            <span className='pl-10 font-bold'>
                                Cards 
                            </span>
                            <span className='pl-10 font-bold'>
                                <Link to='/menu'>
                                Order 
                                </Link>
                            </span>
                            <span className='pl-10 font-bold'>
                                Gift
                            </span>
                        </>
                    }
                </div>
                <div className='flex'>
                    {
                        location.pathname === '/register' ?
                        null
                        :
                        <>
                            <div className='flex items-center'>
                                <MdLocationOn />
                                <span className='mr-10 font-bold'>
                                    Find a store
                                </span>
                            </div>
                            {
                                props.data.username?
                            <div className='flex items-center'>
                                <div className='font-bold'>
                                    {props.data.username}
                                </div>
                                <span className='my-fs-20 ml-1 font-bold'>
                                    <CgProfile onClick={props.myFunc.onLogout} /> 
                                </span>
                            </div>
                            :
                            <>
                            <button className='my-bg-dark my-light rounded-full mr-3 px-3 py-2'>
                                <Link to='/login'>
                                Sign in 
                                </Link>
                            </button>
                            <button className='my-dark rounded-full px-3 py-2' style={{border: '1px solid black'}}>
                                <Link to='/register'>
                                Join now
                                </Link>
                            </button>
                            </>
                            }
                        </>
                    }
                </div>
            </div>
        </>
    )
}