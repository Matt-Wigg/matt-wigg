import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FaPalette, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matt Wigg: Software Developer</title>
        <meta
          name="description"
          content="This is my software development website :)!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p className={styles.code}>matt_wigg = software_developer</p>
        <p className={styles.description}>
         I mainly write code and jump around personal projects.
        </p>
        <div className={styles.grid}>
          <a
            href="https://github.com/matt-wigg"
            target="_blank"
            rel="noreferrer"
            className={styles.githubcard}
          >
            <h2>
              Github <FaGithub fixedwidth />
            </h2>
            <p>I put my project code and other things here.</p>
          </a>
          <a
            href="https://www.linkedin.com/in/matt-wigg/"
            target="_blank"
            rel="noreferrer"
            className={styles.linkedincard}
          >
            <h2>
              LinkedIn <FaLinkedin fixedwidth />
            </h2>
            <p>I try to act like a professional here.</p>
          </a>
        </div>
        <div className={styles.grid}>
          <a
            href="https://www.instagram.com/matt_wigg_/"
            target="_blank"
            rel="noreferrer"
            className={styles.instacard}
          >
            <h2>
              Instagram <FaInstagram fixedwidth />
            </h2>
            <p>I post pictures of my real life here.</p>
          </a>
          <a
            href="https://www.deca.art/SoftwareGuy/Museum"
            target="_blank"
            rel="noreferrer"
            className={styles.artcard}
          >
            <h2>
              Art <FaPalette fixedwidth />
            </h2>
            <p>I collect NFT art and show it here.</p>
          </a>
          <p></p>
        </div>
      </main>
      <footer className={styles.footer}>
        <p align="center">a better website coming soon...</p>
      </footer>
    </div>
  );
}
