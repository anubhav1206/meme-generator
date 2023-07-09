import React from "react"
import "../styles/globals.css";
import "../styles/meme.css";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = React.useState(true)
  function toggleDarkMode(){
    setDarkMode(prevMode => !prevMode)
  }
  
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
