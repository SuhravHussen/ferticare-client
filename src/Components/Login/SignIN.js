import React from 'react';
import { useForm } from "react-hook-form";
const SignIN = ({handle}) => {
  
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
      } = useForm();
    
      const onSubmit = (data) => {
       handle(data.email,  data.Password)
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
                  <label>Password</label>
                 <input    className="input" {...register("Password", { pattern: /^[A-Za-z0-9]\w{8,}$/ })} />
                 {errors?.Password?.type === "pattern" && (
                   <p style={{color:'red'}}>Password must be more then 8 characters</p>
                 )}

                
                 <input style={{width:'100%'}} className="button" type="submit" />
               </form>
    );
};

export default SignIN;