import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'



function Login() {

let navigate=useNavigate()

let Navigate=useNavigate()

useEffect(()=>{
    let userData=localStorage.getItem('token')
    if(userData){
        Navigate('/admin/dashboard')
    }else{
        Navigate('/admin')
    }
},[Navigate])

const [register,setregister]=useState({
    email:'',
    password:''

})

const handlesubmit=(e)=>{
    e.preventDefault()
   const {name,value}=e.target
   setregister({
    ...register,
    [name]:value

   })

   console.log(name)
   console.log(value)

}
const logformsub=(e)=>{
    e.preventDefault()
    const logform={
        email:register.email,
        password:register.password

    }
    axios.post("http://localhost:4000/app/Adminlog",logform
      ).then((response)=>{
        console.log(response);
        console.log('response');
        localStorage.setItem('token',response.data.token)
       
       
        response.data.admin && navigate('/admin/dashboard')

     
      }).catch((error)=>{
        console.log(error)
      }
      )
}

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-black">
                  Admin Login
                </h1>
                <form className="mt-6" onSubmit={logformsub}>
                    <div className="mb-2">
                        <label
                            for="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name='email'
                            value={register.email}
                            onChange={handlesubmit}
                            className="block w-full px-4 py-2 mt-3 bg-white border rounded-md focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            for="password"
                            name='password'
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                         name='password'
                         value={register.password}
                         onChange={handlesubmit}
                            type="password"
                            className="block w-full px-4 py-2 mt-3 bg-white border rounded-md focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    
                    <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-400 rounded-md hover:bg-red-600 focus:outline-none">
                            Login
                        </button>
                    </div>
                </form>

                
            </div>
        </div>
  )
}

export default Login