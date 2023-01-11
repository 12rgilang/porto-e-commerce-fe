import axios from "axios";
import { useEffect, useState } from "react";
import toast, {Toaster} from 'react-hot-toast'
import { Link } from 'react-router-dom'

let Menu = () =>{

    const [ data, setData ] = useState([])
    // const [ backupData, setBackupData ] = useState([])  // backup data ini untuk csr clientside rendering
    const [category, setCategory] = useState([])

    const [selectedMenu, setSelectedMenu] = useState(0)
    const [disabledButton, setDisabledButton] = useState(false)

    useEffect(() => {
        onGetData()
    }, [])

    // ini get data dari client side, jadi semua data diambil diserahkan kepada client, namun ditamplikan untuk client melalui fitur filter agar tidak tertampil semua
    // let onGetData = async() => {
    //     try {
    //         //  Metode1 : filter client side
    //         let response = await axios.get('https://my-json-server.typicode.com/12rgilang/jsonserver-deployment-trial/products')
    //         let responseCategory = await axios.get('https://my-json-server.typicode.com/12rgilang/jsonserver-deployment-trial/category')
    //         let newResponseFilter = response.data.filter(value => {
    //             return value.category === 0
    //         })
    //         setData(newResponseFilter)
    //         setBackupData(response.data)
    //         setCategory(responseCategory.data)
    //     } catch (error) {
    //         toast.error(error.message)
    //     }
    // }

        // let onFilter = async(idx) => {
    //     let newDataFiltered = backupData.filter((value) => {
    //         return value.category === idx
    //     })

    //     setData(newDataFiltered)
    //     setSelectedMenu(idx)
    // }

    // get data & filtering direct dari Server side
    let onGetData = async() => {
        try {
            let response = await axios.get('https://my-json-server.typicode.com/12rgilang/jsonserver-deployment-trial/products?category=0') // ini mengambil produk category index ke 0
            let responseCategory = await axios.get('https://my-json-server.typicode.com/12rgilang/jsonserver-deployment-trial/category') // ini mengambil produk category dan ditampilkan di sidebar

            setData(response.data)
            setCategory(responseCategory.data)
        } catch (error) {
            console.log(error)
        }
    }

    let onFilter = async(idx) => {
        setDisabledButton(true)
        let response = await axios.get(`https://my-json-server.typicode.com/12rgilang/jsonserver-deployment-trial/products?category=${idx}`)

        setData(response.data)
        setSelectedMenu(idx)
        setDisabledButton(false)
    }

    return(
        <>
         <div className="flex-col px-10 pt-20 md:px-20 md:pt-20">
            <div className="basis-1/6 my-4">
                <div>
                    <h1 className="my-fs-25 mb-3 font-bold">
                        {category[selectedMenu]}
                    </h1>
                </div>
                {
                category.map((value, index) => {
                    return(
                        <button key={index} onClick={() => onFilter(index)} className=" flex-col border rounded-full mx-3 md:mx-3 pt-2 px-3 md:px-5 py-3 md:py-5 focus:opacity-50 " disabled={disabledButton}> {disabledButton ? 'loading' : value }</button>
                    )
                        })
                }
            </div>
            <div className="basis-5/6">
                <div>
                    <h1 className="my-fs-30 font-bold">
                        All Menu
                    </h1>
                </div>
                <div className="mt-10 border-bottom pb-3">
                    <h1 className="my-fs-25 font-bold">
                    {category[selectedMenu]}
                    </h1>
                </div>
                {/* Lists Products */}
                <div className="grid grid-cols-2 mt-3">
                    {
                        data.length?
                        data.map((value, index) => {
                            return(
                                <div key={index} className='flex-wrap sm:flex items-center mt-3 rounded-full'>
                                    <div>
                                        <Link to={`/product/${value.id}`}>
                                            <img src={value.image} style={{ width:'100px', height:'100px' }} className='rounded-full' />
                                        </Link>
                                    </div>
                                    <div className='pl-3'>
                                        <h1 className='my-fs-20 font-bold'>
                                            {value.name}
                                        </h1>
                                    </div>
                                </div>
                            )
                        })
                        :
                            "Coming Soon"
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default Menu