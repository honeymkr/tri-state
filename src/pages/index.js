import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>For over 30 years, we have been servicing the tri-state area by drilling 
      water wells for for residential, commercial and municipalities. Also, we drill soil monitoring wells for new construction work
      and soil quality observation purposes. Feel free to call us about your water and drilling needs.
    </p>
    <h2>Owner - Neal Faulkner</h2>
    <h2>Admin - Heather Faulkner</h2>
        
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    </Layout>
)

export default IndexPage
