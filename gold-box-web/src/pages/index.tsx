import type { NextPage } from "next";
import Head from "next/head";

import styles from "./index.module.css";


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>골드박스PR</title>
        <meta
          name="description"
          content="골드박스 PR 페이지"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default Home;
