import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matt_Wigg_ Software Development</title>
        <meta
          name="description"
          content="This is my software development website, Nerd!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>This is my software development website</a>
        </h1>
        <p className={styles.description}>
          I write code and never finish projects.
          <p>
            <code className={styles.code}>England = (move) =&gt; sanDiego;</code>
          </p>
        </p>
        <div className={styles.grid}>
          <a
            href="https://github.com/matt-wigg"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <h2>GitHub &rarr;</h2>
            <p>I put the code to the things I work on here.</p>
          </a>
          <a
            href="https://www.linkedin.com/in/matt-wigg/"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <h2>LinkedIn &rarr;</h2>
            <p>I try to act like a professional here.</p>
          </a>
          <a
            href="https://www.instagram.com/matt_wigg_/"
            target="_blank"
            rel="noreferrer"
            className={styles.card}
          >
            <h2>Instagram &rarr;</h2>
            <p>I post pictures of my real life here.</p>
          </a>
          <p>

          </p>
        </div>
      </main>
      <footer className={styles.footer}>
        <div>Yes, I am really using the create-next-app template as my porfolio
            landing page... For now ™️ 😭 ✌️</div>
      </footer>
    </div>
  )
}
