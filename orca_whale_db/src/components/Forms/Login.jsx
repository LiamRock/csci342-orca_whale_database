import { useEffect, useState } from 'react';
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
    password: z.string().min(8, {message: "You have entered an invalid email or password"})
});
function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(formSchema)
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = data => {
      setIsLoading(true);
      fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then((response) => {
        if(!response.ok) {
          throw new Error ("An error has occured during login.");
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        toast.success("Login successful!");
        dispatch(login({
          userName: data?.user?.userName || "",
          email: data?.user?.email || "",
          
        }));
        navigate("/account");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        const errorKeys = Object.keys(errors);
        errorKeys.forEach((key, index) => {
          setTimeout(() => {
            toast.error(errors[key].message);
          }, (index + 1) * 1000);
        });
      }, [errors]);

    return (
        <div className='text-black h-[80vh]'>
            <br />
            <h2 className='text-7xl text-center pt-[7rem]'>PNW TRACKER</h2>
            <h2 className='text-5xl text-center py-10'>Welcome Back!</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col items-center w-[100vw]">
                    <input className='box-border rounded-lg border-2 border-black text-black bg-white pt-2 pr-40 pl-2 pb-2 mt-0 mb-3.5 ' type="text" placeholder="Email" name="email" {...register("email")}/>
                    <input className='box-border rounded-lg border-2 border-black text-black bg-white pt-2 pr-40 pl-2 pb-2 mt-0 mb-3.5 ' type="password" placeholder="Password" name="password" {...register("password")}/>
                    <p><Link to="/forgotpassword">Forgot my password?</Link></p>
                    <br />
                    {isLoading ? (
                    <button className='text-black bg-slate-100 pt-2 pr-2 pl-2 pb-2 mt-0 mb-3.5' disabled>
                      Loading...
                    </button>
                  ) : (
                    <button className='text-black bg-slate-100 pt-2 pr-2 pl-2 pb-2 mt-0 mb-3.5'>Login</button>
                  )}
                    <p>Dont have an account? <Link to="/signup">Sign up</Link></p>
                    
                </div>
                <br />
            </form>
            <Toaster/>
        </div>
    )
}
export default Login