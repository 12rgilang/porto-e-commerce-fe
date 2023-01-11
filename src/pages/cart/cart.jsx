import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Cart(){

    const [data, setData] = useState([])

    useEffect(() => {
        onGetCart()
    }, [])

    let onGetCart = async() => {
        try {
            let myToken = parseInt(localStorage.getItem('token'))

            if(myToken){
                let res = await axios.get(`https://my-json-server.typicode.com/12rgilang/jsonserver-deployment-trial/cart?_expand=users&_expand=products`)
                console.log(res)
                setData(res.data)
            }
        } catch (error) {
            
        }
    }

    return(
        <div className="flex">
            <div className="basis-3/6 px-32 py-20">
                <h1 className="my-fs-25 font-bold">
                    Order Lists
                </h1>
                <div className="flex">
                    <div>

                    </div>
                    <div className="py-10">
                        {
                            data.map((value, index) => {
                                return(
                                    <div>
                            <h1 className="my-fs-20 font-bold">
                               
                            </h1>
                            <h1 className="my-fs-16">
                                {value.data}
                            </h1>
                            <button style={{ width: '25px', height: '25px' }} className="my-bg-main my-light font-bold rounded-sm mt-2">
                                - 
                            </button>
                            <span className="px-2 my-fs-14">
                                10
                            </span>
                            <button style={{ width: '25px', height: '25px' }} className="my-bg-main my-light font-bold rounded-sm mt-2">
                                + 
                            </button>
                        </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="basis-3/6 px-32 py-20">
                <h1 className="my-fs-25 font-bold">
                    Order Summary
                </h1>
                <div className="pt-10">
                    <div className="flex">
                        <div className="my-fs-18">
                            1.
                        </div>
                        <div className="ml-2 basis-2/6 my-fs-18">
                            Americano 
                        </div>
                        <div className="ml-2 my-fs-18 basis-2/6">
                            x 1
                        </div>
                        <div className="my-fs-18 font-bold basis-2/6 flex justify-end">
                            : Rp. 30.000,00
                        </div>
                    </div>
                    <div className="flex">
                        <div className="my-fs-18">
                            2.
                        </div>
                        <div className="ml-2 basis-2/6 my-fs-18">
                            Americano 
                        </div>
                        <div className="ml-2 my-fs-18 basis-2/6">
                            x 1
                        </div>
                        <div className="my-fs-18 font-bold basis-2/6 flex justify-end">
                            : Rp. 30.000,00
                        </div>
                    </div>
                    <div className="flex">
                        <div className="my-fs-18">
                            3.
                        </div>
                        <div className="ml-2 basis-2/6 my-fs-18">
                            Americano 
                        </div>
                        <div className="ml-2 my-fs-18 basis-2/6">
                            x 1
                        </div>
                        <div className="my-fs-18 font-bold basis-2/6 flex justify-end">
                            : Rp. 30.000,00
                        </div>
                    </div>
                </div>
                <div className="flex justify-end py-1 border-top mt-2">
                    <div className="my-fs-25 basis-3/6">
                        Total
                    </div>
                    <div className="my-fs-25 font-bold basis-3/6 flex justify-end">
                        : Rp. 30.000,00
                    </div>
                </div>
                <button className="w-100 py-2 mt-5 my-bg-main my-light font-bold rounded-sm mt-2">
                    Checkout
                </button>
            </div>
        </div>
    )
}