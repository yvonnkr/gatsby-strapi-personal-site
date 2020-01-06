import React from "react"
import Layout from "../components/layout"
import styles from "../css/about.module.css"
import Title from "../components/Title"
const about = () => {
  return (
    <Layout>
      <section className={styles.about}>
        <Title title="about"></Title>
        <article className={styles.text}>
          <p>Hello, I am @yvonnkr and I am a software engineer.</p>
        </article>
      </section>
    </Layout>
  )
}

export default about
