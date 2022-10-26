import React from "react";
import { Link } from "react-router-dom";

const Error404page = () => {
  return (
    <div>
      <div className="mx-auto mt-40 h-80 w-80 mockup-code bg-primary text-primary-content">
        <pre className="items-center justify-center">
          <code className="font-bold text-3xl">Error 404</code>
          <p className="my-10 font-semibold">This Page Does Not Exist</p>
          <button className="btn glass">
            <Link to={"/"}>Return Home</Link>
          </button>
        </pre>
      </div>
    </div>
  );
};

export default Error404page;
