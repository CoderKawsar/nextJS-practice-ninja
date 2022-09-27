import Head from "next/head";
import React from "react";
import { loremIpsum } from "react-lorem-ipsum";
import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Head>
        <title>Ninja | About</title>
        <meta name="keywords" content="about ninja" />
      </Head>
      <div>
        <h1>About Page</h1>
        <p>{loremIpsum()}</p>
      </div>
    </>
  );
}

export default About;
