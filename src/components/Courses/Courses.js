import React from "react"
import Course from "./Course"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../../css/courses.module.css"
import Title from "../Title"

const getPosts = graphql`
  query {
    allStrapiCourse(sort: { fields: published, order: DESC }) {
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

const Courses = () => {
  const data = useStaticQuery(getPosts)
  const courses = data.allStrapiCourse.nodes

  return (
    <section className={styles.courses}>
      <Title title="all" subtitle="courses" />
      <div className={styles.center}>
        {courses.map(item => (
          <Course key={item.id} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Courses
