import React from "react"
import LayoutProviders from "@theme/LayoutProviders"
import {useColorMode} from "@docusaurus/theme-common"
import NavBar from "@theme/Navbar"
import Footer from "@theme/Footer"
const Home = (): JSX.Element => {
  return <>
    <LayoutProviders>
      <NavBar></NavBar>
      <Footer></Footer>
      </LayoutProviders>
  </>
}
export default Home