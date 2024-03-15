import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Toaster, toast } from "react-hot-toast";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const signupSchema = z.object({
    userName: z.string().min(1, {message: "User name is requred"}),
    email: z.string().min(1, {message: "Invalid email format"}).nonempty({ message: "Email is requred"}),
    password: z.string().min(8, {message: "Password must be at least 6 characters"}),
    confirmPassword: z.string().min(8, {message: "Confirm Password must be at least 6 characters"}),
  });

function Signup() {
    const {register, handleSubmit, formState: {errors}, watch} = useForm({
        resolver:zodResolver(signupSchema)
      });
      const navigate = useNavigate();
      const dispatch = useDispatch();
  
      const password = watch("password");
      const confirmPassword = watch("confirmPassword");
  
      useEffect(() => {
        const errorKeys = Object.keys(errors);
        errorKeys.forEach((key, index) => {
          setTimeout(() => {
            toast.error(errors[key].message);
          }, (index + 1) * 1000);
        });
      }, [errors]);
    
      const onSubmit = data => {
        if(password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        console.log("Signup data:", data);
        localStorage.setItem("user", JSON.stringify(data));
        toast.success("Signup sucessful. Please login.");
        navigate("/login");
      }
  
    return (
        <div className='text-black w-[100vw]'>
            <br />
            <h2 className='text-7xl text-center pt-20'>PNW TRACKER</h2>
            <h2 className='text-5xl text-center py-10'>Sign up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col items-center">
                    <input className='box-border rounded-lg border-2 border-black text-black bg-white pt-2 pr-40 pl-2 pb-2 mt-0 mb-3.5 ' type="text" placeholder="Username" name="userName" {...register("userName")}/>
                    <input className='box-border rounded-lg border-2 border-black text-black bg-white pt-2 pr-40 pl-2 pb-2 mt-0 mb-3.5 ' type="text" placeholder="Email" name="email" {...register("email")}/>
                    <input className='box-border rounded-lg border-2 border-black text-black bg-white pt-2 pr-40 pl-2 pb-2 mt-0 mb-3.5 ' type="password" placeholder="Password" name="password" {...register("password")} />
                    <input className='box-border rounded-lg border-2 border-black text-black bg-white pt-2 pr-40 pl-2 pb-2 mt-0 mb-3.5 ' type="password" placeholder="confirmPassword" name="confirmPassword" {...register("confirmPassword")} />
                    <button className=" bg-slate-100 pt-2 pr-2 pl-2 pb-2 mt-0 mb-3.5">Register</button>
                    <p>Already have an account? <Link to="/login">Log in</Link></p>
                </div>
                <br />
            </form>
            <Toaster/>
        </div>
    )
}
export default Signup