import Head from 'next/head';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from '../styles/Home.module.css';

export default function Home() {
  useEffect(() => { AOS.init({ duration: 1000 }); }, []);

  const skills = [
    { name: 'Java, C, Python', level: '90%' },
    { name: 'HTML, CSS, JavaScript, React, Node.js', level: '85%' },
    { name: 'Databases: Oracle, MySQL, MongoDB', level: '80%' },
  ];

  const projects = [
    {
      title: 'Academia-Check (Mini Project)',
      tech: 'Java, Servlets, HTML, CSS, SQL',
      desc: 'Student attendance management system with secure authentication and efficient record-keeping.',
      link: 'https://github.com/tej1234naru/academia-check',
    },
    {
      title: 'Online Bookstore',
      tech: 'SQL, Java, JSP, HTML, Servlets, CSS',
      desc: 'Online bookstore allowing browsing, searching, and purchasing of books with secure database management.',
      link: 'https://github.com/tej1234naru/bookstore',
    },
  ];

  return (
    <>
      <Head>
        <title>Tejaswini Naru - Portfolio</title>
        <meta name="description" content="Tejaswini Naru - Full-Stack Developer Portfolio" />
      </Head>

      <section className={styles.hero}>
        <h1>Tejaswini Naru</h1>
        <p>Motivated Full-Stack Developer | Building Interactive Web Applications</p>
        <div className={styles.contactLinks}>
          <a href="mailto:tejaswininaru138@gmail.com">Email</a>
          <a href="tel:+918639496744">Call</a>
          <a href="https://www.linkedin.com/in/your-linkedin/" target="_blank">LinkedIn</a>
          <a href="https://github.com/tej1234naru" target="_blank">GitHub</a>
        </div>
      </section>

      <section className={styles.about} data-aos="fade-up">
        <img src="/profile.jpg" alt="Tejaswini Naru" />
        <div>
          <h2>Profile Summary</h2>
          <p>I am a motivated Full-Stack Developer with a CGPA of 8.6 and a passion for building web applications. My technical skills include Java, DSA, SQL, HTML, CSS, MongoDB, React, Node.js, and Python. I enjoy tackling new challenges, learning new technologies, and improving my problem-solving skills. A strong team player, I’m excited to contribute to projects that make a difference while continuing to grow as a developer. I strive to write clean, efficient code and always look for ways to improve.</p>
        </div>
      </section>

      <section className={styles.skills} data-aos="fade-up">
        <h2>Technical Skills</h2>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skill}>
            <div className={styles.skillName}>{skill.name}</div>
            <div className={styles.skillBar}>
              <div className={styles.skillFill} style={{ width: skill.level }}></div>
            </div>
          </div>
        ))}
      </section>

      <section className={styles.projects} data-aos="fade-up">
        <h2>Projects</h2>
        <div className={styles.projectsGrid}>
          {projects.map((proj, index) => (
            <div key={index} className={styles.projectCard}>
              <h3>{proj.title}</h3>
              <p><strong>Technologies:</strong> {proj.tech}</p>
              <p>{proj.desc}</p>
              <a href={proj.link} target="_blank">View on GitHub</a>
            </div>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        &copy; 2025 Tejaswini Naru | <a href="https://github.com/tej1234naru" target="_blank">GitHub</a> | <a href="https://www.linkedin.com/in/your-linkedin/" target="_blank">LinkedIn</a>
      </footer>
    </>
  );
}
