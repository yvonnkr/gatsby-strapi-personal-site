import React from "react"
import Layout from "../components/layout"
import Title from "../components/Title"
import styles from "../css/contact.module.css"
const contact = () => {
  return (
    <Layout>
      <section className={styles.contact}>
        <Title title="contact"></Title>
        <article className={styles.text}>
          <p>
            If you are looking to get a hold of me, you can send me an email at{" "}
            <a href="#">email@email.com</a>.
          </p>
          <p>
            You can also reach me on Twitter at <a href="#">@yvonnkr</a>.
          </p>
        </article>
      </section>
    </Layout>
  )
}

export default contact
