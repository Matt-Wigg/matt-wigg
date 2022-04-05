import Head from "next/head";
import styles from "../styles/Home.module.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

library.add(faGithub, faLinkedin, faInstagram);

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
          I mainly write code, and never finish personal projects
        </p>
        <div className={styles.grid}>
          <a
            href="https://github.com/matt-wigg"
            target="_blank"
            rel="noreferrer"
            className={styles.githubcard}
          >
            <h2>
              Github <FontAwesomeIcon icon={faGithub} fixedWidth />
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
              LinkedIn <FontAwesomeIcon icon={faLinkedin} fixedWidth />
            </h2>
            <p>I try to act like a professional here.</p>
          </a>
          <a
            href="https://www.instagram.com/matt_wigg_/"
            target="_blank"
            rel="noreferrer"
            className={styles.instacard}
          >
            <h2>
              Instagram <FontAwesomeIcon icon={faInstagram} fixedWidth />
            </h2>
            <p>I post pictures of my real life here.</p>
          </a>
          <p></p>
        </div>
      </main>
      <footer className={styles.footer}>
        <p align="center">a better website... coming soon</p>
      </footer>
    </div>
  );
}
