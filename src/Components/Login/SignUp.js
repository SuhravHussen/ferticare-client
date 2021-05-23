import React from 'react';
import { useForm } from "react-hook-form";


  const SignUp = ({handle}) => {
    
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (data) => {   
          console.log(data);
          
        handle(data.email,  data.Password, data.FirstName)
      };
 

    return (
        <form className="signUp-form" onSubmit={handleSubmit(onSubmit)}>
                 <label>Email</label>
                 <input
                  className="input"
                   {...register("email", {
                     required: true,
                   
                     pattern:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                   })}
                 />
                 {errors?.email?.type === "required" && <p style={{color:'red'}}>This field is required</p>}
                 {errors?.email?.type === "pattern" && (
                   <p style={{color:'red'}}>please Input a valid email adress</p>
                 )}
                 <label>First Name</label>
                 <input    className="input" {...register("FirstName", { required: true, pattern: /^[A-Za-z]+$/i })} />
                 {errors?.FirstName?.type === "pattern" && (
                   <p style={{color:'red'}} >Alphabetical characters only</p>
                 )}
                  {errors?.email?.type === "required" && <p style={{color:'red'}}>This field is required</p>}
                  <label>Last Name</label>
                 <input    className="input" {...register("LastName", { required: true, pattern: /^[A-Za-z]+$/i })} />
                 {errors?.LastName?.type === "pattern" && (
                   <p style={{color:'red'}}>Alphabetical characters only</p>
                 )}
                  {errors?.email?.type === "required" && <p style={{color:'red'}}>This field is required</p>}
                  <label>Password</label>
                 <input    className="input" {...register("Password", { required: true, pattern: /^[A-Za-z0-9]\w{8,}$/ })} />
                 {errors?.Password?.type === "pattern" && (
                   <p style={{color:'red'}}>Password must be more then 8 characters</p>
                 )}
                  {errors?.email?.type === "required" && <p style={{color:'red'}}>This field is required</p>}
                
                 <input style={{width:'100%'}} className="button" type="submit" />
               </form>
    );
};






export default SignUp;