import * as React from "react"
import Layout from "../components/layout"
import '../App.scss';

// styles
const pageStyles = {
  color: "#232129",
  display: "flex",
  justifyContent: "center",
  width: "100%"
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Layout/>
    </main>
  )
}

export default IndexPage
