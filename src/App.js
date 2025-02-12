/* This example requires Tailwind CSS v2.0+ */

import Navbar from "./components/Navbar";

// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   Routes,
// } from "react-router-dom";
import Landing from "./components/Landing";
// import Contact_us from "./components/contact_us";

export default function Example() {
  return (
    <>
      <Navbar />
      <Landing />
      {/* <Contact_us/> */}
    </>
  );
}
