import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import allRecords from '../data/records.json'
import RecordSelector from "../components/RecordSelector"

const IndexPage = () => {
  return(
  <Layout>
    <Seo title="RecordSelector" />
    <div className="homepage-container">
      <div className="hero-text">
        <h1>Hey, Gary!</h1>
        <h2>Welcome to your personal record selection service.</h2>
        <RecordSelector records={allRecords}/>
      </div>
    </div>
  </Layout>
  )
}

export default IndexPage
