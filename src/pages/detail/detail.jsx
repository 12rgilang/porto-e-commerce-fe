import axios from  'axios';
import { useParams } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import { BsFillCartFill, BsFillHandbagFill } from "react-icons/bs"


let DetailProduct = () => {

    const productId = useParams()
    const selectSize = useRef()
    const selectTopping = useRef()
    const selectSugar = useRef()
    const selected = useRef()
    const [data, setData] = useState(null)
    const [sizeToShow, setSizeToShow] = useState(0)


    let onGetData = async() => {
        try {
            let response = await axios.get(`https://my-json-server.typicode.com/12rgilang/jsonserver-deployment-trial/products/${productId.id}`)
            setData(response.data)
        } catch (error) {
            console.log(error.message)
        }
    }

    let onSelectSize = () => {
        let indexSelectedSize =  selectSize.current.value
        console.log(indexSelectedSize)
        setSizeToShow(indexSelectedSize)
    }

    let onSelectTopping = () => {
        let indexSelectedTopping = selectTopping.current.value
        console.log(indexSelectedTopping)
    }

    let onSelectSugar = () => {
        let indexSelectedSugar = selectSugar.current.value
        console.log(indexSelectedSugar)
    }

    let onAddOrder = async() =>{
        try {
            let dataToSend = {
                idProduct: productId.id,
                indexSize: parseInt(selectSize.current.value),
                indexTopping: parseInt(selectTopping.current.value),
                indexSugar: parseInt(selectSugar.current.value),
                quantity: 1,
                userId: parseInt(localStorage.getItem('token'))
            }
            let checkExist = await axios.get(`https://my-json-server.typicode.com/12rgilang/jsonserver-deployment-trial/cart?idProduct=${productId.id}`)

            if(checkExist.data.length === 0){
                let response = await axios.post(`https://my-json-server.typicode.com/12rgilang/jsonserver-deployment-trial/cart`, dataToSend)
                console.log(response)
            }else{
                let newQuantity = checkExist.data[0].quantity + 1
                let update = await axios.patch(`https://my-json-server.typicode.com/12rgilang/jsonserver-deployment-trial/cart/${checkExist.data[0].id}`, {quantity: newQuantity})
                console.log(update)
            }
        } catch (error) {
            console.log(error.message)
            
        }
    }

    useEffect(() => {
        onGetData()
    }, [])

    if(data === null){
        return(
            <div>
                in Proccess..
            </div>
        )
    }




    return(
        <>
        {/* jumbotron */}
        <div className="flex top-0 items-center px-20 pt-20 my-bg-main h-96 ">
           <div className="product flex basis-2/5 justify-center">
                <img src={data.image} className='rounded-full' style={{width: '200px', height: '200px'}} />
           </div>
           <div className="desc flex basis-3/5 justify-center">
               <div className="flex-col">
                <p className="my-fs-30 font-bold">{data.name}</p>
                <p className="my-light my-fs-20 font-semi-bold"> {data.size[sizeToShow].calories} Calories</p>
                <p className="my-light my-fs-20 font-semi-bold">Rp. {(data.size[sizeToShow].price).toLocaleString()}</p>
               </div>
           </div>
        </div>

        {/* select size */}
        <div className="parent-size flex mt-10 ml-5 h-screen">
            {/* left */}
            <div className="size my-fs-25 font-bold flex-col basis-2/5 ">
                <div className="border-b-2 flex">
                Size options
                </div>
                <div className="option block flex my-fs-15 border-2 mt-1 items-center">
                <select ref={selectSize} onChange={onSelectSize} className="flex grow border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {
                        data.size.map((value, index) => {
                            return(
                                <option key={index} value={index}>{value.option}</option>
                            )
                        })
                    }
                </select>
                </div>
            </div>
            {/* right */}
            <div className="topping ml-5 my-fs-25 font-bold flex-col basis-3/5 pr-5">
                <div className="border-b-2 flex">
                    Topping
                    </div>
                    <div className="option block flex my-fs-15 border-2 mt-1 items-center">
                    <select ref={selectTopping} onChange={onSelectTopping} className="flex grow border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {
                            data.topping.map((value, index) => {
                                return(
                                    <option key={index} value={index}>{value}</option>)
                                })
                        }
                    </select>
                </div>
                {
                        data.sugar?
                        <>
                        <h1 className="my-fs-25 font-bold pb-2 mt-3" style={{ borderBottom: '3px solid silver' }}>
                        Sugar
                        </h1>
                        <select ref={selectSugar} onChange={onSelectSugar} className="mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {data.sugar.map((value, index) => {
                                return(
                                    <option value={index}>{value}</option>
                                )
                            })}
                        </select>
                            
                            </>
                            :
                            null
                    }

            </div>
        </div>

        {/* Button order */}
        <div className='flex justify-end '>
            {
                localStorage.getItem('token') || localStorage.getItem('tokenUid') ? 
                <div className="cart flex m-4 fixed bottom-16 border-black text-white font-bold rounded-full px-3 py-3 my-bg-dark  text-lg">
                <button onClick={onAddOrder} >
                    Add to order
                </button> 
                </div>
                :
                null
            }
        </div>

        {/* Footer */}
        <div className="bg fixed bottom-0 flex ">
            <div className="my-bg-main w-screen flex font-semibold items-center justify-evenly ">
                <div className="main-content text-white border-b-2 my-3">
                    <div className="top">
                        For Item availability
                    </div>
                    <div className="bottom">
                        Choose store
                    </div>
                </div>
                <div className="icons my-fs-30 ">
                    <BsFillHandbagFill />
                </div>
            </div>
        </div>

        </>
    )
}

export default DetailProduct