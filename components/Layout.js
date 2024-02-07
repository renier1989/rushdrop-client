import Head from "next/head";
import Image from "next/image";
import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>RushDrop - Next </title>
      </Head>

      <div className=" flex min-h-screen bg-gray-100 font-Rubik bg-[url('/bg.svg')]" >
        <div className="container mx-auto">
          <Header />
          <main className="mt-20">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
