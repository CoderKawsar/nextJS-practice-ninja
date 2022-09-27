import Head from "next/head";
import { loremIpsum } from "react-lorem-ipsum";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className="content">
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>{loremIpsum()}</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See more listings</a>
        </Link>
      </div>
    </>
  );
}
