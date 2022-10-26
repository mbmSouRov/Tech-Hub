import React from "react";
import toast, { Toaster } from "react-hot-toast";
const notify = () => toast.success("Successfully toasted!");
const Check = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
};

export default Check;
