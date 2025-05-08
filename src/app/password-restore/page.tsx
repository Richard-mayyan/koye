import Perfection from "@/roam/homepage/Perfection";
import Navbar from "@/roam/navbar";
import React from "react";
import PasswordResetForm from "../login/_components/PasswordResetForm";

type Props = {};

function page({}: Props) {
  return (
    <div>
      <Navbar collections={[]} items={[]} />

      <PasswordResetForm />

      <Perfection />
    </div>
  );
}

export default page;
