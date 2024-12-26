import React from "react";


const Card = ({ item }) => {
  console.log(item);
  return (
    <div className="p-3">
        <div className="md:p-4 card  w-96 shadow-xl hover:scale-105 hover:duration-300 bg-white dark:bg-black dark:text-white">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{item.category}</p>
            <div className="card-actions justify-between">
              
              <div className={item.category === "Free" ? "line-through" : ""}>{item.Price}</div>
              <div className="badge badge-outline w-auto bg-green-500 text-black dark:text-white p-4 hover:cursor-pointer justify-between">
                <div className="flex items-center justify-between w-14">
                <h2>Buy</h2>
                <i className="fa-solid fa-cart-shopping"></i>
                </div>
                </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Card;
