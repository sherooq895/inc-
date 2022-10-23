import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';



function Form() {

  const Navigate=useNavigate()

useEffect(()=>{
  let userData=localStorage.getItem('token')
  if(userData){
    // setuserName(jwtDecode(localStorage.getItem('token')));
    Navigate('/Form')
  }else{
    Navigate('/')
  }
},[Navigate])



  // let decoded={}
  // const token=localStorage.getItem('token')
  // if(token){
  //   decoded=jwt_decode(token)
  // }

  // console.log(token)
  // console.log('tokendddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd')

  const [register, setregister] = useState({
    fname: '',
    lastname: '',
    email: '',
    streetaddress: '',
    city: '',
    state: '',
    pin: '',
    companyname: '',
    // companyLogo: '',
    a: '',
    b: '',
    c: '',
    d: '',
    e: '',
    incubationType: ''

  })

const logout=()=>{
  localStorage.removeItem('token')
  Navigate('/')
}



  const formsubmit = (event) => {
    event.preventDefault()
    const { name, value } = event.target

    setregister({
      ...register,
      [name]: value
    })
    console.log(name)
    console.log(value)
  }
  const onformsubmit = (e) => {
   
    e.preventDefault()
    const registedform = {
      name: register.fname,
      lastname: register.lastname,
      email: register.email,
      streetaddress: register.streetaddress,
      city: register.city,
      state: register.state,
      pin: register.pin,
      companyname: register.companyname,
      incubationType:register.incubationType,
      
      a: register.a,
      b: register.b,
      c: register.c,
      d: register.d,
      e: register.e,
      incubationType: register.incubationType



    }
    console.log(registedform);
    console.log('registedform');

    axios.post("http://localhost:4000/app/form",registedform
      ).then((response)=>{
        console.log("response");
        console.log(response);
        alert('Form submitted')
      })


  }




  return (
    <div>
      <div >
        <div className=" p-20 md:gap-6 bg-green-400">
          <div >
            <div className='flex item-end justify-between	'>
            <div>hi, {}</div>
            <button  type="button" onClick={logout} className='"text-white bg-red-700 font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 rounded-lg items-end"'>LogOut</button>
            </div>
            <div className="flex justify-center pb-5 sm:text-3xl  md:font-bold">
              <h1>APPLICATION FOR INCUBATION</h1>
            </div>
            <form onSubmit={onformsubmit}>
              <div className="overflow-hidden shadow sm:rounded-md ">
                <div className="bg-white px-4 py-5 sm:p-6 solid border-rounded">
                  <div className="grid grid-cols-6 gap-6  border-black ">
                    <div className="col-span-6 sm:col-span-3 ">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700 "
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        name="fname"
                        value={register.name}
                        onChange={formsubmit}

                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 w-full rounded-md border-black shadow-sm h-10 border  "
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700 "
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="lastname"

                        value={register.lastname}
                        onChange={formsubmit}
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 w-full rounded-md border-black shadow-sm h-10  border"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email"
                        value={register.email}
                        onChange={formsubmit}
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 w-full rounded-md border-black shadow-sm h-10 border"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Street address
                      </label>
                      <input
                        type="text"
                        name="streetaddress"
                        value={register.streetaddress}
                        onChange={formsubmit}
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 w-full rounded-md border-black shadow-sm h-10 border"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"

                        value={register.city}
                        onChange={formsubmit}
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 w-full rounded-md border-black shadow-sm h-10 border "
                      />
                    </div>

                    <div className="col-span-6  lg:col-span-2">
                      <label

                        className="block text-sm font-medium text-gray-700"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={register.state}
                        onChange={formsubmit}
                        id="region"
                        autoComplete="address-level1"
                        className="mt-1 w-full rounded-md border-black shadow-sm h-10 border"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Postal code
                      </label>
                      <input
                        type="text"
                        name="pin"
                        value={register.pin}
                        onChange={formsubmit}
                        id="pin"
                        autoComplete="postal-code"
                        className="mt-1 w-full rounded-md border-black shadow-sm h-10 border"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Company name
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="companyname"
                        value={register.companyname}
                        onChange={formsubmit}
                        autoComplete="country-name"
                        className="mt-1 w-full rounded-md border-black shadow-sm h-10 border"
                      />
                    </div>
                    {/* <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="logo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Company Logo
                      </label>
                      <input
                        type="file"
                        id="companyLogo"
                        name="companyLogo"
                        onChange={formsubmit}
                        className="mt-1 w-full rounded-md border-black shadow-sm h-10 border"
                      />
                    </div> */}

                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700 border"
                      >
                        1. Describe your team and Background
                      </label>
                      <input
                        type="text-area"
                        name="a"
                        value={register.a}
                        onChange={formsubmit}
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 w-full rounded-md border-black shadow-sm h-20 border "
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700 border"
                      >
                        2. Describe your company and products
                      </label>
                      <input
                        type="text-area"
                        name="b"
                        value={register.b}
                        onChange={formsubmit}
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 w-full rounded-md border-black shadow-sm h-20 border"
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700 border"
                      >
                        3. Describr the problem you are solv
                      </label>
                      <input
                        type="text-area"
                        name="c"
                        value={register.c}
                        onChange={formsubmit}
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 w-full rounded-md border-black shadow-sm h-20 border"
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700 border"
                      >
                        4. What is unique about your solution ?
                      </label>
                      <input
                        type="text-area"
                        name="d"
                        value={register.d}
                        onChange={formsubmit}
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 w-full rounded-md border-black shadow-sm h-20 border "
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700 border"
                      >
                        5. What is your value proposition for the customer
                      </label>
                      <input
                        type="text-area"
                        name="e"
                        value={register.e}
                        onChange={formsubmit}
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 w-full rounded-md border-black shadow-sm h-20 border"
                      />
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className=" text-sm font-medium text-gray-700"
                      >
                        6. Type of Incubation needed.
                      </label>
                      <br />

                      <input
                        type="radio"
                        name="incubationType"
                        id="incubationType"

                        value='virtual'
                        onChange={formsubmit}
                        className=""
                      />
                      <label
                        htmlFor="street-address"
                        className=" text-sm font-medium text-gray-700 pl-2 border"
                      >
                        Virtual Incubation
                      </label>
                      <br />
                      <input
                        type="radio"
                        name="incubationType"
                        id="incubationType"
                        value='pshyical'
                        onChange={formsubmit}
                        className=""
                      />
                      <label
                        htmlFor="street-address"
                        className=" text-sm font-medium text-gray-700 pl-2 border"
                      >
                        Physical Incubation
                      </label>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6 flex justify-center">
                  <span className="bg-sky-500">
                    {' '}
                    <button
                      type="submit"
                      className=" bg-cyan-500 inline-flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Submit
                    </button>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form