import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ data }) => {
  const { name, id } = data;
  return (
    <div>
      <p>
        <Link to={`/courseInfo/${id}`}>{name}</Link>
      </p>
    </div>
  );
};

export default Sidebar;
