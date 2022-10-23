

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaHourglassHalf } from 'react-icons';



function AppList() {
    const [formdata, setformdata] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [Showdata, Setshowdata] = useState({
        name: '', last_name: '', email: '', streeetaddress: '',
        city: '', state: '', pin: '', companyname: ''

    })


    const setmodal = (id) => {

        formdata.filter((iteam) => {

            if (iteam._id === id) {
                Setshowdata({
                    name: iteam.name, email: iteam.email, streetaddress: iteam.streetaddress,
                    city: iteam.city, state: iteam.state, pin: iteam.pin, companyname: iteam.companyname
                })
            }
            setShowModal(true)

        })
        axios.post('http://localhost:4000/app/view', { id }).then((response) => {
            console.log('view updateddddddd')
        })

    }



    const approval = (data) => {
        axios.post('http://localhost:4000/app/approv', { data }).then((response) => {

        }
        )


    }

    useEffect(() => {
        axios.get('http://localhost:4000/app/Data').then((response) => {
            setformdata(response.data)
        }
        )



    }, [showModal]



    )






    return (
        <div>
            <div className="flex flex-col">
                <div className="overflow-x-auto ">
                    <div className="p-1.5 w-full inline-block align-middle ">
                        <div className="overflow-hidden border rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">

                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Email
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                        >
                                            Company Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >

                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                        >
                                            Actions
                                        </th>

                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {
                                        formdata.filter((item) => item.view == 'false').map((data) =>


                                            <tr>

                                                <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                                    {data.name}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                    {data.email}
                                                </td>
                                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                                    {data.companyname}
                                                </td>
                                                <td >
                                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-2 " onClick={() => setmodal(data._id)}>View</button>
                                                </td>


                                            </tr>

                                        )


                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {showModal ?
                <div>

                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100 outline-none focus:outline-none">
                        <div className="relative w-auto my-3 mx-auto max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-green-400 outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">


                                </div>
                                <div className="relative p-6 flex-auto">

                                    <label className="block text-black text-3xl font-bold mb-2">
                                        Name:{Showdata.name}
                                    </label>
                                    <label className="block text-black text-3xl font-bold mb-2">
                                        email:{Showdata.email}
                                    </label>
                                    <label className="block text-black text-3xl font-bold mb-2">
                                        companyname:{Showdata.companyname}
                                    </label>
                                    <label className="block text-black text-3xl font-bold mb-2">
                                        streetaddress:{Showdata.streetaddress}
                                    </label>
                                    <label className="block text-black text-3xl font-bold mb-2">
                                        city:  {Showdata.city}
                                    </label>
                                    <label className="block text-black text-3xl font-bold mb-2">
                                        state:{Showdata.state}
                                    </label>
                                    <label className="block text-black text-3xl font-bold mb-2">
                                        pin:{Showdata.pin}
                                    </label>

                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-white bg-red-700 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>

                </div> : null}

        </div>
    )
}

export default AppList