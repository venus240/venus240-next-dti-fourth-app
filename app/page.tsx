"use client";

import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import Logo from "../images/Logo.png";
import bmi from "./images/BMI.png";
import bmr from "./images/BMR.png";
import car from "./images/CarInstallment.png";

// We will use placeholder images as we don't have access to your local files.
// Using different colored placeholders for visual distinction.


export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>เครื่องมือคำนวณออนไลน์</title>
      </Head>

      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#f7f3f9]">
        {/* Main title and subtitle */}
        <header className="text-center mb-12">
          <Image
            src={Logo}
            alt="Logo" width={100} height={100} className="mx-auto rounded-full" />
          <h1 className="text-5xl font-bold text-[#8a2be2] drop-shadow-md">
            เครื่องมือคำนวณออนไลน์
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            เลือกเครื่องมือที่คุณต้องการใช้ด้านล่างนี้
          </p>
        </header>

        {/* Card container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
          {/* BMI Calculator Card */}
          <Link
            href="/bmi"
            className="block bg-white p-8 rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-[#ffeef2] cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center">
              <Image
                src={bmi}
                alt="BMI" width={100} height={100} className="mx-auto rounded-full" />
              <h2 className="text-2xl font-semibold text-[#333] mb-2 text-center">
                คำนวณ BMI
              </h2>
              <p className="text-gray-500 text-center">
                คำนวณดัชนีมวลกาย
              </p>
            </div>
          </Link>

          {/* BMR Calculator Card */}
          <Link
            href="/bmr"
            className="block bg-white p-8 rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-[#f6f2ff] cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center">
              <Image
                src={bmr}
                alt="BMR" width={100} height={100} className="mx-auto rounded-full" />
              <h2 className="text-2xl font-semibold text-[#333] mb-2 text-center">
                คำนวณ BMR
              </h2>
              <p className="text-gray-500 text-center">
                คำนวณอัตราการเผาผลาญพื้นฐาน
              </p>
            </div>
          </Link>

          {/* Car Installment Calculator Card */}
          <Link
            href="/car"
            className="block bg-white p-8 rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-[#e6f7ff] cursor-pointer"
          >
            <div className="flex flex-col items-center justify-center">
              <Image
                src={car}
                alt="Car" width={100} height={100} className="mx-auto rounded-full" />
              <h2 className="text-2xl font-semibold text-[#333] mb-2 text-center">
                คำนวณผ่อนรถ
              </h2>
              <p className="text-gray-500 text-center">
                คำนวณค่างวดผ่อนรถ
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
