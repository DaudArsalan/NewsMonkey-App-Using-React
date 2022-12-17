import React from "react";
import loading from "./loading.gif";

export default function Spinner() {
  return (
    <div className="my-5 flex justify-center">
      <img className="w-14" src={loading} alt="loading" />
    </div>
  );
}
