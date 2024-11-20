import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const LoginB = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => console.log(data)

  return (
    <div>
        <dialog id="my_modal_4" className="modal dark:bg-black bg-white">
        <div className="modal-box bg-white text-black dark:bg-black dark:text-white border-spacing-5 outline-none">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link to="/">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            </Link>
          <div className="">
            <h2 className="text-lg font-bold mb-4">Login</h2>
            <br/>
            <h3 className="text-base font-semibold ">Email</h3>
            <input className="bg-white text-black dark:bg-black dark:text-white outline-none" type="email" placeholder="Enter your email" required {...register("email", { required: true })} ></input>
            <br/>
            {errors.email && <span className="text-red-500">This field is required</span>}
            <br/>
            <br/>
            <h3 className="text-base font-semibold ">Password</h3>
            <input className="bg-white text-black dark:bg-black dark:text-white outline-none" type="password" placeholder="Enter your password" required {...register("password", { required: true })}></input>
            <br/>
            {errors.password && <span className="text-red-500">This field is required</span>}
            <br/>
            <br/>
            <div className="flex">
            <button className="p-4 text-white btn outline-none text-center scale-90 bg-pink-500 hover:scale-100 hover:bg-pink-500 hover:duration-300" type="submit">Login</button>
            {/* <p className=" pl-48 pt-3">Not Registered? <Link to="/signup" className="underline text-blue-500 cursor-pointer pl-2">Signup</Link></p> */}
            </div>
           

          </div>
            

            {/* <input type="password" placeholder="Enter your password" required>
            <button type="submit">Login</button> */}
        </form>
        </div>
      </dialog>
    </div>
  )
}

export default LoginB;