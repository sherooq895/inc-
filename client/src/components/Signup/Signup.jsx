import React,{useState} from 'react'
import axios from 'axios'





function Signup() {

      const [register,setregister]=useState({
        name:'' ,
        email:'' ,
        password:''

      })

     const handlesubmit=(e)=>{
        e.preventDefault()
        const{name,value}=e.target 
     setregister({
        ...register,
        [name]:value
     })
             
   
    }
      const onSubmit=(e)=>{
       e.preventDefault()

       const registered={
        name:register.name,
        email:register.email,
        password:register.password
       }
       console.log(registered);
axios.post("http://localhost:4000/app/signup",registered).then(response=> console.log(response.data))


    
       
        }

    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-red-600">
                            Sign Up
                        </h3>
                    </a>
                </div>
                <div className="w-full px-20 py-4 mt-6 overflow-hidden bg-white shadow-xl sm:max-w-lg sm:rounded-lg">
                    <form  onSubmit={onSubmit}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined">
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    value={register.name}
                                    onChange={handlesubmit}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50  border solid"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    value={register.email}
                                    onChange={handlesubmit}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border solid"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    value={register.password}
                                    onChange={handlesubmit}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border"
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-400 rounded-md hover:bg-red-600 focus:outline-none">
                            Submit
                        </button>
                    </div>



                    </form>
                    <div className="mt-4 text-grey-600">
                        Already have an account?{" "}
                        <span>
                            <a className="text-purple-600 hover:underline" href="/">
                                Log in
                            </a>
                        </span>
                    </div>



                </div>
            </div>
        </div>
          
       
    )
}

export default Signup