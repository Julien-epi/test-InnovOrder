import React from "react";
import { Link } from "react-router-dom";

export default function Home()  {
    return (
      <>
        <div>Home</div>
        <Link to={"/searchProduct"}>
          <button className="inline-flex items-center text-base font-bold text-primary">
            Search Product
          </button>
        </Link>
      </>
    );
}
