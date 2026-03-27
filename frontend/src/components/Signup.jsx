import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios"

const Signup = () => {
    const [user, setUser] = useState({
        fullName:"",
        userName:"",
        password:"",
        confirmPassword:"",
        gender:"",
    })           
    const navigate = useNavigate()
    const handleCheckbox = (gender) => {
      setUser({...user, gender})
    }
    
    const submitHandler = async (e) => {
      e.preventDefault()
     try {
        const res = await axios.post(`http://localhost:8000/api/v1/user/register`, user, {
            headers: {
                "Content-Type": 'application/json'
            },
            withCredentials:true
        })
      if (res.data.success) {
        toast.success(res.data.message)
        navigate("/login")
      }
        
     } catch (error) {
        console.log("Backend error:", error.response.data)
        
     }
      setUser({
        fullName:"",
        userName:"",
        password:"",
        confirmPassword:"",
        gender:"",
      })
      
    }
    
  return (
    <div className="min-w-96 mx-auto">
      <div className="h-full p-4 w-full rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border-[0.5px] border-gray-400">
        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-black to-amber-400 bg-clip-text text-transparent">
          Sign-up
        </h1>
        <form onSubmit={submitHandler} action="">
          <div className="p-3 rounded-3xl">
            <label className="label p-2 ">
              <span className="  label-text ">Full Name</span>
            </label>
            <input
            value={user.fullName}
            onChange={(e) =>setUser({...user, fullName:e.target.value})
            }

              className="bg-gray-800 rounded-xl w-full input-bordered h-7 p-4"
              type="text"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="p-3 rounded-3xl">
            <label className="label p-2 ">
              <span className="  label-text ">User Name</span>
            </label>
            <input
            value={user.userName}
            onChange={(e) =>setUser({...user, userName:e.target.value})
            }

              className="bg-gray-800 rounded-xl w-full input-bordered h-7 p-4"
              type="text"
              placeholder="Enter User Name"
            />
          </div>
          <div className="p-3 rounded-3xl">
            <label className="label p-2 ">
              <span className="  label-text ">Create Password</span>
            </label>
            <input
            value={user.password}
            onChange={(e) =>setUser({...user, password:e.target.value})
            }

              className="bg-gray-800 rounded-xl w-full input-bordered h-7 p-4"
              type="password"
              placeholder="Enter Password"
            />
          </div>
          <div className="p-3 rounded-3xl">
            <label className="label p-2 ">
              <span className=" label-text ">Confirm Password</span>
            </label>
            <input
            value={user.confirmPassword}
            onChange={(e) =>setUser({...user, confirmPassword:e.target.value})
            }
              className="bg-gray-800 rounded-xl w-full input-bordered h-7 p-4"
              type="text"
              placeholder="Confirm Password"
            />
          </div>
          <div className="flex items-center gap-x-6 my-4 ml-23">
            <div className="flex items-center">
              <p>Male</p>
              <input
              checked={user.gender == "male"}
              onChange={() => handleCheckbox("male")
              }
               type="checkbox" className="checkbox mx-2" />
            </div>
            <div className="flex items-center">
              <p>Female</p>
              <input
              checked={user.gender == "female"}
              onChange={() => handleCheckbox("female")
              }
               type="checkbox" className="checkbox mx-2" />
            </div>
          </div>
          <Link to="/login" className="text-blue-400 hover:text-blue-700">
            Already Have an Account ? Login
          </Link>
          <div>
           <button type="submit" className="bg-gradient-to-r from-gray-400 to-gray-900 hover:from-amber-600 hover:via-orange-400 hover:to-amber-600 transition-all duration-500 w-90 ml-4 cursor-pointer mt-4 text-amber-300 hover:text-black px-3 py-2 text-center rounded font-medium border border-amber-600 hover:border-amber-300 shadow-lg shadow-amber-900/50 hover:shadow-amber-500/50">
  Signup
</button></div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
