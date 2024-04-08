import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';

import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>xrli</title>
        <meta name='description' content='Portfolio website for Xin Rui Li' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <main className={styles.main}>
        <Image
          src={'/headshot.png'}
          width={144}
          height={144}
          alt='headshot'
          className={utilStyles.borderCircle}
        />
        <p>
          Hi, I&apos;m xrli.
          <br />
          You can reach out to me at <code>xinrui.dev at gmail dot com</code>
        </p>

        <h2>About me</h2>
        <ul>
          <li>
            I graduated with a B.Sc. in Computer Science from McGill University
            in 2023, with a focus on Data Science and Machine Learning. — I was
            a tutor at the{' '}
            <a href='https://mcgill-csus.ca'>
              Computer Science Undergraduate Society
            </a>
            , and I was a VP at the{' '}
            <a href='https://mcgillai.com'>
              McGill Artificial Intelligence Society
            </a>{' '}
            (now Senior Advisor).
          </li>
          <li>
            I&apos;m a full-stack software engineer by trade, with professional
            experience mostly in back-end and infrastructure.
          </li>
          <li>
            In my free time, I like to work on game development, embedded
            systems, financial tools, and other random stuff.
          </li>
        </ul>

        <h2>Technical stuff</h2>
        <ul>
          <li>
            I really love AI&ML, and I&apos;ve been hanging out with the folks
            at McGill Artificial Intelligence society to feed my interest.
            It&apos;s been awesome because I&apos;ve both learned a ton about
            AI&ML and got to help others out. Plus, I&apos;ve become pretty good
            at using Python and exploring all its ecosystem.
          </li>
        </ul>

        <div className={styles.experienceContainer}>
          <h2>Professional Experience</h2>
          {/* Fairstone Entry */}
          <div className={styles.experienceEntry}>
            <span className={styles.company}>
              <b>Fairstone</b>
            </span>
            <span className={styles.title}>
              Software Engineer, Platforms and Infrastructure
            </span>
            <span className={styles.location}>Montreal, QC</span>
            <span className={styles.date}>May 2023 to Present</span>
          </div>

          {/* ndex Entry */}
          <div className={styles.experienceEntry}>
            <span className={styles.company}>
              <a
                href='https://github.com/orchard-ai/ndex-backend'
                className={styles.companyLink}
              >
                <b>ndex</b>
              </a>
            </span>
            <span className={styles.title}>Co-founder</span>
            <span className={styles.location}>Montréal, QC</span>
            <span className={styles.date}>January 2023 to May 2023</span>
          </div>

          {/* Meta Entry */}
          <div className={styles.experienceEntry}>
            <span className={styles.company}>
              <b>Meta</b>
            </span>
            <span className={styles.title}>Software Engineer Intern</span>
            <span className={styles.location}>Palo Alto, CA</span>
            <span className={styles.date}>May 2022 to August 2022</span>
          </div>

          {/* Microsoft Entry */}
          <div className={styles.experienceEntry}>
            <span className={styles.company}>
              <b>Microsoft</b>
            </span>
            <span className={styles.title}>Software Engineer Intern</span>
            <span className={styles.location}>Montréal, QC</span>
            <span className={styles.date}>May 2022 to August 2022</span>
          </div>

          {/* CAE Entry */}
          <div className={styles.experienceEntry}>
            <span className={styles.company}>
              <b>CAE</b>
            </span>
            <span className={styles.title}>Data Science Intern</span>
            <span className={styles.location}>Montréal, QC</span>
            <span className={styles.date}>May 2021 to August 2021</span>
          </div>

          {/* UMAknow Entry */}
          <div className={styles.experienceEntry}>
            <span className={styles.company}>
              <b>UMAknow</b>
            </span>
            <span className={styles.title}>Software Engineer Intern</span>
            <span className={styles.location}>Montréal, QC</span>
            <span className={styles.date}>January 2020 to August 2020</span>
          </div>

          {/* CAE Entry */}
          <div className={styles.experienceEntry}>
            <span className={styles.company}>
              <b>CAE</b>
            </span>
            <span className={styles.title}>Software Engineer Intern</span>
            <span className={styles.location}>Montréal, QC</span>
            <span className={styles.date}>May 2019 to August 2019</span>
          </div>
        </div>

        <h2>Projects</h2>
        <p>Non-exhaustive list of projects outside of work:</p>
        <ul>
          <li>
            <a href='https://hack4-pan.vercel.app'>Hack4Pan</a> — A website for
            the Hack4Pan 2022 hackathon, which included team registration and
            Discord integration. Successful event for over 400 people and 60
            teams.
            <br />
            Built with Next.js, Express.js, and MongoDB. Deployed on Vercel.
          </li>
          <li>
            <a href='https://github.com/xinxin001/LegendsOfAndor'>
              Legends of Andor
            </a>{' '}
            — Video-game adaption of a classic RPG board game, built with Unity.
            Includes multiplayer built with Photon.
          </li>
          <li>
            <a href='https://github.com/xinxin001/ArtisticAnimals'>
              Artistic Animals
            </a>{' '}
            — A Generative Adversarial Network that generates images of animals.
            At the moment it is only trained with <i>dogs</i>.
            <br />
            Deployed in a simple web-app built with Flask.
          </li>
          <li>
            <a href='https://devpost.com/software/proper-park-mw0h6e'>
              Proper Park:
            </a>{' '}
            — A mobile app that helps you find parking spots in Montreal and it
            helps you decypher the parking signs. Winner of the 2019 PolyHx
            hackathon.
            <br />
            Built with React Native, Node.js, Express.js, and MongoDB.
          </li>
        </ul>

        <h2>Academic Background</h2>
        <p>B.Sc. Computer Science from McGill University, 2023</p>
        <ul>
          <li>
            <a href='https://hack4-pan.vercel.app'>
              McGill Artificial Intelligence Society
            </a>{' '}
            — Senior Advisor
            <br />
          </li>
          <li>
            <a href='https://github.com/xinxin001/LegendsOfAndor'>
              Computer Science Undergraduate Society
            </a>{' '}
            — Tutor
          </li>
        </ul>
      </main>
    </>
  );
}
