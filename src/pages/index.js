import * as React from "react"

import "../main.css";

import Header from "../components/Header";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";

const IndexPage = () => {
  return (
    <main>
      <Header />
      <About />
      <Portfolio />
      <Resume />
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
