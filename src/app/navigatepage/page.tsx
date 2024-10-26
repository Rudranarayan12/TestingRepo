"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Utility from "../component/ToastContainer/Utils";

const Home = () => {
  const router = useRouter();
  const handleToastFire = () => {
    Utility.sToast("Hello");
  };
  return (
    <div>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        expedita rerum consequuntur sunt. Impedit reiciendis voluptates, quis
        reprehenderit nobis similique?
      </h1>
      <div>
        <button onClick={() => router.push("/contact")}>
          Navigate to Contact
        </button>
      </div>
      <button onClick={handleToastFire}>click to see the toast </button>
    </div>
  );
};

export default Home;
