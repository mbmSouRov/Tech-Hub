import React, { useEffect, useState } from "react";
import ContentDetails from "../ContentDetails/ContentDetails";
import Sidebar from "../Sidebar/Sidebar";
import { GiBoomerangSun } from "react-icons/gi";

const Courses = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);
  useEffect(() => {
    fetch("https://vercel-webtech-deploy.vercel.app/tech-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="lg:flex lg:justify-around mt-8">
      <div className="p-5">
        <p className="text-2xl flex items-center text-rose-600 font-bold ">
          <GiBoomerangSun />
          Course Overview
        </p>
        {categories.map((catagory) => (
          <Sidebar key={catagory.id} data={catagory}></Sidebar>
        ))}
      </div>
      <div className="lg:grid grid-cols-2 lg:gap-2 flex-col">
        {categories.map((category) => (
          <ContentDetails key={category.id} data={category}></ContentDetails>
        ))}
      </div>
    </div>
  );
};

export default Courses;
