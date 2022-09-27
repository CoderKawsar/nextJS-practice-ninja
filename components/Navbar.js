import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav>
      <Link href="/">
        <a className="logo">
          <Image src="/logo.png" height={77} width={128} alt="Home" />
        </a>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/ninja">
        <a>Ninja</a>
      </Link>
      <Link href="/ninja/another">
        <a>Another</a>
      </Link>
    </nav>
  );
}

export default Navbar;
