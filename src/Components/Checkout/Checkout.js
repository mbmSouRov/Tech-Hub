import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const allDatas = useLoaderData();
  const data = allDatas[0];
  console.log(data);
  const id = data.id;
  const name = data.company.name;
  const phone = data.phone;
  const picture = data.photoURL;
  const price = data.price;
  const learnMore = data.website;
  return (
    <div>
      <div className="mx-auto mt-20 card w-96 bg-base-100 shadow-xl image-full">
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="mt-10">
            <p>Price: {price}</p>
            <p>Phone: {phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
