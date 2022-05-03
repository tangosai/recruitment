import React from "react";
import Head from "next/head";
import Header from "./Header";
import { useRouter } from "next/router";
import Footer from "./Footer";

export default function Layouts({ title, keywords, description, children }) {
  const router = useRouter();
  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
