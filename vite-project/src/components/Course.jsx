import React, { useEffect, useState } from 'react'
import list from '../../public/list2.json'
import Card from './Card'
import { Link } from 'react-router-dom'
import { getBook } from '../../../../BackEnd/Controller/Book.controller'



const Course = () => {
    // const [book,setBook]=useState([]);
    // useEffect(async ()=>
    //     {
    //         try {
    //            const res = await axios.get("http://localhost:4001/book");
    //            console.log(res.data);
    //            setBook(res.data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //         getBook();
    //     },[])
  return (
    <div className=''>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 text-2xl md:text-4xl '>
            <h1>We Are Delighted To Have you <span className='text-green-600 font-bold'> Here :) </span>  </h1>
           <div className='mt-12 p-3 grid grid-cols-1 md:grid-cols-3'>
            {
                list.map((item)=>(
                    <div key={item.id}>
                        <Card item={item} />
                    </div>
                ))
                
            }
           </div>
          <Link to="/">
           <div className='pt-12'>
            <button className='bg-green-600 text-white pt-1 pb-4 font-sans rounded-md hover:scale-110 hover:duration-300 w-20 h-11 text-center text-2xl'>
                Back
            </button>
            
           </div>
           </Link> 
        </div>
    
    </div>
  )
}

export default Course