import React from "react"
import Layout from "../components/layout"
import HomeBanner from "../components/Home/HomeBanner"
import LatestCourses from "./../components/Courses/LatestCourses"

const IndexPage = () => (
  <Layout>
    <HomeBanner />
    <LatestCourses />
  </Layout>
)

export default IndexPage
