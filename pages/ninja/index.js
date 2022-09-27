import React from "react";
import { loremIpsum } from "react-lorem-ipsum";
import styles from "../../styles/Ninjas.module.css";
import Navbar from "../../components/Navbar";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

export default function Ninja({ ninjas }) {
  return (
    <>
      <h1>Ninja</h1>
      {ninjas?.map((ninja) => (
        <Link href={"/ninja/" + ninja?.id} key={ninja?.id}>
          <a className={styles.single}>{ninja?.name}</a>
        </Link>
      ))}
    </>
  );
}
