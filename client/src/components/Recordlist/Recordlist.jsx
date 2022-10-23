import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Recordlist() {
  const [formdata, setformdata] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/app/Data').then((response) => {
      setformdata(response.data)

    }
    )

  }, [])



  return (
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
                  >City

                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    State
                  </th>
                  
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Status
                  </th>

                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {

                  formdata.map((data) =>

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
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {data.city}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {data.state}
                      </td>
                      <td >
                      </td>
                      {
                        data.status == 'approved' ? <td >
                          <p  className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-2 " >Approved</p>
                        </td> : data.status == 'booked' ?
                          <td >
                            <p  className="text-white bg-green-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-2 ">Booked</p>
                          </td>:
                           <td >
                           <p  className="text-white bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-2 ">Declined</p>
                         </td>
                      }





                    </tr>

                  )
                }





              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Recordlist
