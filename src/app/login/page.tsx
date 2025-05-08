import Perfection from "@/roam/homepage/Perfection";
import Navbar from "@/roam/navbar";
import React from "react";
import LoginForm from "./_components/loginForm";

type Props = {};

function page({}: Props) {
  return (
    <div>
      <Navbar collections={[]} items={[]} />

      <LoginForm />

      <Perfection />
    </div>
  );
}

export default page;
