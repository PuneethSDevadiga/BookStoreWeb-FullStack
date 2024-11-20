import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import LoginB from "./LoginB";
import { useForm } from "react-hook-form"

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => console.log(data)
  return (
    // // //     // <div className=' dark:bg-black dark:text-white bg-white text-black  h-screen items-center justify-center' >
    // // //     //       <div>
    // // //     //   {/* <dialog id="my_modal_3" className="modal"> */}
    // // //     //     <div className=" bg-white text-black dark:bg-black dark:text-white">
    // // //     //       <form method="">
    // // //     //         {/* if there is a button in form, it will close the modal */}
    // // //     //         <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
    // // //     //           ✕
    // // //     //         </button>
    // // //     //       </form>
    // // //     //       <div className="">
    // // //     //         <h2 className="text-lg font-bold mb-4">Login</h2>
    // // //     //         <br/>
    // // //     //         <h3 className="text-base font-semibold ">Email</h3>
    // // //     //         <input className="bg-white text-black dark:bg-black dark:text-white outline-none" type="email" placeholder="Enter your email" required></input>
    // // //     //         <br/>
    // // //     //         <br/>
    // // //     //         <h3 className="text-base font-semibold ">Password</h3>
    // // //     //         <input className="bg-white text-black dark:bg-black dark:text-white outline-none" type="password" placeholder="Enter your password" required></input>
    // // //     //         <br/>
    // // //     //         <br/>
    // // //     //         <div className="flex">
    // // //     //         <button className="p-4 text-white btn outline-none text-center scale-90 bg-pink-500 hover:scale-100 hover:bg-pink-500 hover:duration-300" type="submit">Login</button>
    // // //     //         <p className=" pl-48 pt-3">Not Registered? <span to="/signup" className="underline text-blue-500 cursor-pointer pl-2">Signup</span></p>
    // // //     //         </div>

    // // //     //       </div>

    // // //     //         {/* <input type="password" placeholder="Enter your password" required>
    // // //     //         <button type="submit">Login</button> */}

    // // //     //     </div>
    // // //     //   {/* </dialog> */}
    // // //     // </div>
    // // //     // </div>
    <>
      <div className="flex h-screen items-center justify-center  bg-white text-black dark:bg-black dark:text-white">
        <div id="my_modal_3" className="border p-6 rounded-xl shadow-lg">
          <div className=" bg-white text-black dark:bg-black dark:text-white">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
            <div className="">
              <div className="flex justify-between">
                <h1 className="text-2xl font-bold mb-4">Signup</h1>
                <Link to="/">
                  <button className="btn text-black dark:text-white btn-sm btn-circle btn-ghost">
                    ✕
                  </button>
                </Link>
              </div>

              <br />
              <h3 className="text-base font-semibold ">Name</h3>
              <input
                className="bg-white text-black dark:bg-black dark:text-white outline-none"
                type="name"
                placeholder="Enter your Full Name"
                required
                {...register("text", { required: true })}
              ></input>
              <br/>
              {errors.name && <span className="text-red-500">This field is required</span>}
              <br />
              <br />
              <h3 className="text-base font-semibold ">Email</h3>
              <input
                className="bg-white text-black dark:bg-black dark:text-white outline-none"
                type="email"
                placeholder="Enter your email"
                required
                {...register("email", { required: true })}
              ></input>
              <br/>
              {errors.email && <span className="text-red-500">This field is required</span>}
              <br />
              <br />
              <h3 className="text-base font-semibold ">Password</h3>
              <input
                className="bg-white text-black dark:bg-black dark:text-white outline-none"
                type="password"
                placeholder="Enter your password"
                required
                {...register("password", { required: true })}
              ></input>
              <br/>
              {errors.password && <span className="text-red-500">This field is required</span>}
              <br />
              <br />
              <h3 className="text-base font-semibold ">Confirm Password</h3>
              <input
                className="bg-white text-black dark:bg-black dark:text-white outline-none"
                type="password"
                placeholder="Enter your password"
                required
                {...register("email", { required: true })}
              ></input>
              <br/>
              {errors.password && <span className="text-red-500">This field is required</span>}
              <br />
              <br />
              <div className="flex">
                <button
                  className="p-4 text-white btn outline-none text-center scale-90 bg-pink-500 hover:scale-100 hover:bg-pink-500 hover:duration-300"
                  type="submit"
                >
                  Signup
                </button>
                <p className=" pl-48 pt-3">
                  Have An Account?{" "}
                  {/* <a
                  className="underline text-blue-500 cursor-pointer pl-2" onClick={()=>document.getElementById("my_modal_3").showModal()}>
                  Login
                </a>
                <Login/> */}
                </p>
                {/* <a
                  className="btn bg-black text-white hover:bg-pink-400 hover:text-black hover:scale-105 hover:duration-150 dark:bg-white dark:text-black dark:hover:bg-pink-400  "
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </a>
                <Login /> */}
                <button className="bunderline text-blue-500 cursor-pointer pl-2" onClick={()=>document.getElementById("my_modal_4").showModal()}>Login</button>
                <LoginB/>
              </div>
            </div>
            </form>

            {/* <input type="password" placeholder="Enter your password" required>
          <button type="submit">Login</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import Login from './Login';

// const Signup = () => {
//   const handleLoginClick = () => {
//     document.getElementById("login_modal").showModal();
//   };

//   return (
//     <div className="flex h-screen items-center justify-center bg-white text-black dark:bg-black dark:text-white">
//       <div id="my_modal_3" className="border p-6 rounded-xl shadow-lg">
//         <div className="bg-white text-black dark:bg-black dark:text-white">
//           <form method="dialog">
//             {/* Close button for the modal */}
//             <div className='flex justify-between'>
//               <h2 className="text-lg font-bold mb-4">Signup</h2>
//               <Link to="/">
//                 <button className="btn text-black btn-sm btn-circle btn-ghost">✕</button>
//               </Link>
//             </div>

//             <h3 className="text-base font-semibold">Name</h3>
//             <input className="bg-white text-black dark:bg-black dark:text-white outline-none" type="text" placeholder="Enter your Full Name" required />
//             <br /><br />
//             <h3 className="text-base font-semibold">Email</h3>
//             <input className="bg-white text-black dark:bg-black dark:text-white outline-none" type="email" placeholder="Enter your email" required />
//             <br /><br />
//             <h3 className="text-base font-semibold">Password</h3>
//             <input className="bg-white text-black dark:bg-black dark:text-white outline-none" type="password" placeholder="Enter your password" required />
//             <br /><br />
//             <h3 className="text-base font-semibold">Confirm Password</h3>
//             <input className="bg-white text-black dark:bg-black dark:text-white outline-none" type="password" placeholder="Confirm your password" required />
//             <br /><br />
//             <div className="flex">
//               <button className="p-4 text-white btn outline-none text-center scale-90 bg-pink-500 hover:scale-100 hover:bg-pink-500 hover:duration-300" type="submit">Signup</button>
//               <p className="pl-48 pt-3">
//                 Have an Account?{" "}
//                 <a className="underline text-blue-500 cursor-pointer pl-2" onClick={handleLoginClick}>
//                   Login
//                 </a>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* Render Login modal */}
//       <dialog id="login_modal">
//         <Login />
//         <button onClick={() => document.getElementById("login_modal").close()}>Close</button>
//       </dialog>
//     </div>
//   );
// }

// export default Signup;
