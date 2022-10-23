import React, { useEffect, useState, useReducer } from 'react'
import axios from 'axios'


function Bookingslot() {

  let layout = {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: 'rgb(126 126 126 / 60%)',

  }
  const [data, setdata] = useState([])
  const [selectdata, setselectdata] = useState([])

  const [appdata, setappdata] = useState([])
  const [formdata, setformdata] = useState([])
  const [showModal, setShowModal] = useState(false);
  const [showModalbooked, setShowModalbooked] = useState(false);
  const [Showdata, Setshowdata] = useState({
    company: '',
    is_booked: ''
  })



  const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);


  useEffect(() => {
    axios.get('http://localhost:4000/app/slotdata').then((response) => {

      setformdata(response.data)
    })

    axios.get('http://localhost:4000/app/Data').then((response) => {
      setappdata(response.data)

    })
  }, [reducerValue])


  const submit = (no, cmpny) => {

    const data = {
      slot_no: no,
      company: cmpny
    }

    axios.get(`http://localhost:4000/app/statuschange?slot=${no}&company=${cmpny}`).then((response) => {

      // forceUpdate()

    })
    

    axios.get(`http://localhost:4000/app/bookedstatus?company=${cmpny}`).then((response) => {

      
      forceUpdate()
    })

    setShowModal(false)
  }




  const slotbook = (id) => {
    setShowModal(true)

  }


  const slotbooked = (id) => {

    axios.get(`http://localhost:4000/app/getcompdata?id=${id}`).then((response) => {
      Setshowdata({
        company: response.data[0].company,
        is_booked: response.data[0].is_booked

      })
    })

    setShowModalbooked(true)

  }







  return (
    <div>



      {showModal ? <div style={layout} /> : null}
      <div className='min-h-screen flex item-center bg-green-500' >
        <div className='flex-1 max-w-4 mx-auto p-10'>
          <ul className=' grid grid-cols-4 gap-8'>
            {

              formdata.map((data) => {
                return (
                  data.is_booked === 'booked' ?
                    <li className=' rounded-8g shadow-sm outline-double outline-3 outline-offset-2  bg-gray-500 hover:scale-105' onClick={() => slotbooked(data.slot_no)
                    }><div className='h-24 text-center bold text-2xl flex justify-center items-center'>{data.slot_no}</div></li>



                    : <li className='bg-white rounded-8g shadow-sm outline-double outline-3 outline-offset-2  hover:bg-red-600 hover:scale-105' onClick={() => {
                      slotbook(data.slot_no)
                      setdata(data.slot_no)
                    }}><div className='h-24 text-center bold text-2xl flex justify-center items-center'>{data.slot_no}</div></li>


                )

              }
              )
            }

          </ul>


        </div>

      </div>

      {showModal ?
        <div>

          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100 outline-none focus:outline-none">
            <div className="relative w-auto my-3 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg px-[100px] py-[30px] relative flex flex-col w-full bg-green-400 outline-none focus:outline-none">
                <div>Approved Companies</div>

                <select name="company" id="company" onChange={(e) => { setselectdata(e.target.value) }}>

                  {
                    appdata.filter((item) => item.status == 'approved').map((items) =>

                      <option value={items.companyname}>{items.companyname}</option>
                    )
                  }
                </select>


                <div className="flex pb-0 items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white bg-red-700 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                                      </button>
                  <button
                    className="text-white bg-green-800 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => submit(data, selectdata)}
                  >
                    Submit
                  </button>

                </div>
              </div>
            </div>
          </div>

        </div> : null}
      {showModalbooked ?
        <div>

          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100 outline-none focus:outline-none">
            <div className="relative w-auto my-3 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg px-[100px] py-[30px] relative flex flex-col w-full bg-green-400 outline-none focus:outline-none">
                <div>Already Booked</div>

                <div><span >{Showdata.company}</span> company Is Already Booked This Slot</div>
                

                


                <div className="flex pb-0 items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-white bg-red-700 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModalbooked(false)}
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

export default Bookingslot