import Header from "../devlink/Header";
import Script from 'next/script';

import {
  HomePage,
  HomeSecond,
  HomeThird,
  HomeFourth,
  HomeFifth,
  HomeSixth,
  Footer
} from "@/devlink";
import { useState, useEffect } from "react";
// import { createAuth0Client } from '@auth0/auth0-spa-js';
import { UserProvider } from "../contexts/user.context";
export default function Jobs() {
  const copyYear = new Date().getFullYear();

  const [error, setError] = useState(null);

  return (
    <>
    <UserProvider>
      <Script
        id="webflow-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            if (window.Webflow) {
              window.Webflow.destroy();
              window.Webflow.ready();
              window.Webflow.require('ix2').init();
              document.dispatchEvent(new Event('readystatechange'));
            }
          `,
        }}
      />
      <HomePage/>
      <Header/>
      <HomeSecond/>
      <HomeThird/>
      <HomeFourth/>
      <HomeFifth/>
      <HomeSixth/>
      <Footer/>
      </UserProvider>
    </>
  );
}
