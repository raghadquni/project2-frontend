import React from "react";
import "./styles.css";


const Support = () => {
  return (
    <>
      <div className="RegBox1">
          <h1> Contact Support </h1>
          <h3> How Can We Help ?</h3>

          <input className="inpuut" type="text" name="text" placeholder="Enter your full name" />
          <input className="inpuut" type="email" name="email" placeholder="Enter your email" />

          <input className="inpuut"
            type="numbrt"
            name="number"
            placeholder="Enter your phone number"
          />

          <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Let us know what you need help with..."
>
          </textarea>

          <input className="btn" type="submit" value="Submit" />
       
      </div>
    </>
  );
};

export default Support;
