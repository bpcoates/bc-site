"use client";
import { useState } from "react";
import React from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitterSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaRegCopyright,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import { FaCopyright } from "react-icons/fa";
import logo from "../public/logo.png";

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[50px] flex justify-between items-center px-4 bg-[#1a363d] text-slate-400">
      <div>
        <Link href="/">
          <Image
            src={logo}
            alt="logo image"
            height={40}
            width={40}
            className="hover:scale-105"
          />
        </Link>
      </div>
      {/* menu */}

      <ul className="hidden md:flex gap-4">
        <li>
          <Link href="/" className="hover:text-slate-200">
            home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-slate-200">
            about
          </Link>
        </li>
        <li>
          <Link href="/art" className="hover:text-slate-200">
            art
          </Link>
        </li>
        <li>
          <Link href="/photos" className="hover:text-slate-200">
            photos
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-slate-200">
            contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#1a363d] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} href="/">
            home
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} href="/about">
            about
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} href="/art">
            art
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} href="/photos">
            photos
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} href="/contact">
            contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className="flex fixed flex-col bottom-[10%] left-0 text-sm">
        <ul>
          <li className="w-[100px] h-[30] flex rounded-t-sm justify-between items-center ml-[-75px] hover:ml-[0px] duration-300 hover: bg-[#1a363d] p-1 pl-5">
            <a
              className="flex justify-between items-center w-full"
              href="https://www.linkedin.com/in/brentcoates/"
            >
              LinkedIn <FaLinkedin size={15} />
            </a>
          </li>
          <li className="w-[100px] h-[30] flex rounded-b-sm justify-between items-center ml-[-75px] hover:ml-[0px] duration-300 hover: bg-[#1a363d] p-1 pl-5">
            <a
              className="flex justify-between items-center w-full"
              href="mailto:bpcoates@hotmail.com"
            >
              Email <HiOutlineMail size={15} />
            </a>
          </li>
        </ul>
      </div>

      <div className="flex fixed flex-col bottom-1 left-1 text-xs">
        <div>
          <p className="flex pl-1 items-center tracking-widest bottom-0">
            copyright&nbsp; <FaCopyright size={10} />
            &nbsp;2024, brent coates
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
