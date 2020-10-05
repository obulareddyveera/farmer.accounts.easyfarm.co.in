import React from "react";
import Head from "next/head";
import GoogleButton from "react-google-button";
import styles from "../styles/Home.module.css";

export default function Home() {
  const fetchOAuth2LoginLink = React.useCallback(() => {
    console.log("--== fetchOAuth2LoginLink ==--");
    try {
      fetch("http://api.farmer.accounts.easyfarm.co.in/")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          window.location.href = data.loginLink;
        });
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <div className={styles.container}>
      <div>I am home page</div>
      <GoogleButton onClick={() => fetchOAuth2LoginLink()} />
    </div>
  );
}
