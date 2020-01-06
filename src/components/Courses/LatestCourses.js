import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from "../../css/courses.module.css"
import Title from "../Title"
import Course from "./Course"

const getPosts = graphql`
  query {
    allStrapiCourse(sort: { fields: published, order: DESC }, limit: 3) {
      nodes {
        id
        title
        url
        size
        image {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const LatestCourses = () => {
  const data = useStaticQuery(getPosts)
  const courses = data.allStrapiCourse.nodes

  return (
    <section className={styles.courses}>
      <Title title="top" subtitle="courses" />
      <div className={styles.center}>
        {courses.map(item => (
          <Course key={item.id} {...item} />
        ))}
      </div>
      <Link to="/courses" className="btn-primary">
        all courses
      </Link>
    </section>
  )
}

export default LatestCourses
