import React, { useEffect, useState } from "react";
import ContentDetails from "../ContentDetails/ContentDetails";
import Sidebar from "../Sidebar/Sidebar";

const Courses = () => {
  const [categories, setCategories] = useState([]);
  console.log(categories);
  useEffect(() => {
    fetch("https://vercel-webtech-deploy.vercel.app/tech-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="flex justify-around mt-8">
      <div className="p-5">
        {categories.map((catagory) => (
          <Sidebar key={catagory.id} data={catagory}></Sidebar>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {categories.map((category) => (
          <ContentDetails key={category.id} data={category}></ContentDetails>
        ))}
      </div>
    </div>
  );
};

export default Courses;
