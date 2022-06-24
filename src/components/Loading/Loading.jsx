import React from "react";
import { BallTriangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="h-screen w-screen grid place-items-center">
      <BallTriangle color="blue" height={400} width={400} />
    </div>
  );
};

export default Loading;
