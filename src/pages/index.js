import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const backgroundUrl =
    "https://source.unsplash.com/random/900x700/?transport=1";

  return (
    <div
      className="min-h-screen flex items-center justify-center font-mono"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Head>
        <title>Transportinator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        className="absolute inset-0 backdrop-filter backdrop-blur backdrop-brightness-80"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      ></div>

      <main className="bg-opacity-60 bg-black py-20 px-10 absolute rounded-lg">
        <div className="text-white text-2xl text-center justify-center items-center flex">
          Transportinator: Manage Orders Easily
        </div>
        <div className="flex justify-center items-center mt-4">
          <button className="bg-red-800  text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-red-700">
            <Link href="/login">Get Started</Link>
          </button>
        </div>
      </main>
    </div>
  );
}
