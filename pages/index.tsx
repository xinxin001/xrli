import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'

import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>xrli</title>
        <meta name="description" content="Portfolio website for Xin Rui Li" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <Image 
          src={"/headshot.png"}
          width={144} 
          height={144}
          alt="headshot"
          className={utilStyles.borderCircle}
        />
        <p>
          Hi, my name is Xin Rui Li. I live in Montreal, Canada. 
          <br/>
          You can reach out to me at <code>li.xinrui3 at gmail dot com</code>
        </p>

        <p>This site is meant to be a brief introduction of myself. 
          A brief rundown on past experiences, things I&apos;ve built, and stuff that I find interesting.
        </p>

        <h2>About me</h2>
        <ul>
          <li>
            I am currently obtaining a B.Sc. in Computer Science from McGill University,
            with a focus on Data Science and Machine Learning. —
            I am a tutor at the <a href="https://mcgill-csus.ca">Computer Science Undergraduate Society</a>,
            and I was a VP at the <a href="https://mcgillai.com">McGill Artificial Intelligence Society</a> (now Senior Advisor).
          </li>
          <li>
            I&apos;m a full-stack software engineer by trade, 
            with professional experience mostly in web and mobile development. 
          </li>
          <li>
            In my free time, I like to work on game development, embedded systems, financial tools, and other random stuff.
          </li>
        </ul>

        <h2>Technical stuff</h2>
        <ul>
          <li>
          I really love AI&ML, and I&apos;ve been hanging out with the folks at McGill Artificial Intelligence society to feed my interest. 
          It&apos;s been awesome because I&apos;ve both learned a ton about AI&ML and got to help others out. 
          Plus, I&apos;ve become pretty good at using Python and exploring all its ecosystem.
          </li>
          <li>
            For front-end web technologies, I have experience with both React and Angular, 
            as well as the meta-frameworks built around them. 
            Although I prefer to stick with React and TypeScript.
          </li>
          <li>
            On the back-end, I built most of my things using Node.js, Express.js and Flask.
            However, I&apos;m also experimenting with Go, 
            as well as Rust + axum for <i><b> blazingly fast </b></i> results! 🦀
          </li>
        </ul>

        <h2>Professional Experience</h2>
        <div style={{marginLeft: '1em'}}>
          <p> <b>Stealth Startup</b> &mdash; Co-founder &mdash; Montreal</p>
          <p> <b>Meta</b> &mdash; Software Engineer Intern &mdash; Menlo Park</p>
          <p> <b>Microsoft</b> &mdash; Software Engineer Intern &mdash; Montreal</p>
          <p> <b>CAE</b> &mdash; Data Science Intern &mdash; Montreal</p>
          <p> <b>UMAknow</b> &mdash; Software Engineer Intern &mdash; Montreal</p>
          <p> <b>CAE</b> &mdash; Software Engineer Intern &mdash; Montreal</p>
        </div>


        <h2>Projects</h2>
        <p>Non-exhaustive list of projects outside of work:</p>
        <ul>
          <li>
            <a href="https://hack4-pan.vercel.app">Hack4Pan</a> —
            A website for the Hack4Pan 2022 hackathon, which included team registration and Discord integration.
            Successful event for over 400 people and 60 teams.
            <br/>
            Built with Next.js, Express.js, and MongoDB. Deployed on Vercel.
          </li>
          <li>
            <a href="https://github.com/xinxin001/LegendsOfAndor">Legends of Andor</a> —
            Video-game adaption of a classic RPG board game, built with Unity.
            Includes multiplayer built with Photon.
          </li>
          <li>
            <a href="https://github.com/xinxin001/ArtisticAnimals">Artistic Animals</a> —
            A Generative Adversarial Network that generates images of animals.
            At the moment it is only trained with <i>dogs</i>.
            <br/>
            Deployed in a simple web-app built with Flask.
          </li>
          <li>
            <a href="https://devpost.com/software/proper-park-mw0h6e">Proper Park:</a> —
            A mobile app that helps you find parking spots in Montreal 
            and it helps you decypher the parking signs. Winner of the 2019 PolyHx hackathon.
            <br/>
            Built with React Native, Node.js, Express.js, and MongoDB.
          </li>
        </ul>
      </main>
    </>
  )
}
