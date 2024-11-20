import React from "react";
import BooksRemovebg from "../../public/BooksRemovebg.png"

const Banner = () => {
  return (
    <div className="md:items-center max-w-screen-2xl container mx-auto md:px-20 items-center  flex flex-col md:flex-row ">
      <div className="order-2 md:order-1">
        <h1 className="text-5xl font-extrabold text-green-500 w-full pl-6 ">
          Discover Your Next <span className="text-pink-500">Favorite Book Every Day!!!</span>
        </h1>
        <p className="text-xl pt-4 p-6">
          Find the latest bestsellers, timeless classics, and everything in
          between.
        </p>
        <div className="py-0 p-6">
          <label className="input input-bordered flex items-center gap-2 bg-white dark:bg-black dark:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
        </div>
        {/* <div className="grid md:grid-cols-2 gap-8 items-center"> */}
          {/* Image Section */}
          {/* <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src="http://www.w3.org/2000/svg"
              alt=""
              className="w-full h-auto object-cover"
            />
          </div>
        </div> */}
        <div className="pt-3 p-6">
        <button className="btn  bg-black dark:bg-white dark:hover:bg-slate-700 dark:text-black  dark:hover:text-white  text-white  hover:bg-white hover:text-black hover:scale-105">SUBMIT</button>
        </div>
        
      </div>
      {/* <div className="order-1 items-center max-w-screen-2xl container mx-auto  px-4  flex flex-col md:flex-row "><img src="https://img.freepik.com/premium-photo/still-life-with-books-teapot-cup-tea-dark-background_934652-2608.jpg" className="w-90 md:h-96 md:w-[100vw] md:pl-56  rounded-2xl" alt="" /></div> */}
      <div className="grid md:grid-cols-2 gap-8 items-center order-1 min-h-screen  "> 
          {/* Image Section */}
           <div className="overflow-hidden rounded-lg shadow-lg  w-80">
            <img
              src="https://img.freepik.com/premium-photo/still-life-with-books-teapot-cup-tea-dark-background_934652-2608.jpg"
              alt=""
              className="w-full h-auto  object-cover"
            />
          </div>
        </div>
    </div>
  );
};

export default Banner;
