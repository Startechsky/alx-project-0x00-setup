import Button from "@/components/Button";
import Card from "@/components/Card";
import React from "react";

const landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <div className="gap-10">
        <Button
          title="Submit"
          style={{ padding: "10px", background: "blue", borderRadius: "20px", border:"2px solid red" }}
        />
        <Button
          title="Accept"
          style={{ padding: "5px", background: "red", borderRadius: "10px", color:"black" }}
        />
        <Button
          title="Save"
          style={{ padding: "30px", background: "green", borderRadius: "30px" }}
        />
      </div>
    </div>
  );
};

export default landing;
