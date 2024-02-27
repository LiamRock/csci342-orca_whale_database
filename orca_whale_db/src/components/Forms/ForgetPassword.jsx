import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { login } from '../../store/slices/authSlices';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Toaster, toast } from "react-hot-toast";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';


const formSchema = z.object({
    email: z.string().min(1, { message: "Email is requred"}),
})
function ForgetPassword() {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(formSchema)
    });

    const navigate = useNavigate();

    const onSubmit = data => {
        const storedUserData = localStorage.getItem('user');
        const userData = storedUserData ? JSON.parse(storedUserData) : null;

        if(userData && userData.email === data.email) {
            toast.success("Email has been sent");
            navigate("/login");
        } else {
            toast.error("Please enter a valid email");
        }
    }
    useEffect(() => {
        const errorKeys = Object.keys(errors);
        errorKeys.forEach((key, index) => {
          setTimeout(() => {
            toast.error(errors[key].message);
          }, (index + 1) * 1000);
        });
      }, [errors]);
    return (
        <div className='text-black '>
        <h2 className='text-4xl text-center py-5'>Forget your password</h2>
        <p className='text-center pb-5'>Please enter the email address you'd like your password reset information sent to</p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col items-center">
                <input className='box-border rounded-lg pt-2 pr-40 pl-2 pb-2 mt-0 mb-3.5 text-white' type="text" placeholder="Email" name="email" {...register("email")}/>
                <button className="text-white pt-2 pr-2 pl-2 pb-2 mt-0 mb-3.5">Submit</button>
            </div>
            <br />
        </form>
        <Toaster/>
    </div>
    );
}

export default ForgetPassword;