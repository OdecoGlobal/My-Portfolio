import { useEffect, useRef, useState } from 'react';

// component
import ProjectDetails from '../../components/ProjectDetails';

// styles
import styles from './Home.module.css';

export default function Home() {
  const mySkills = [
    `I develop web applications`,
    `I design web applications`,
    `I design graphics & logos`,
    `I'm a Biomedical Scientist`,
  ];
  const [skillIndex, setSkillIndex] = useState(0);
  // const mySkills = useRef(_mySkills);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSkillIndex(prevIndex => (prevIndex + 1) % mySkills.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [mySkills]);

  return (
    <section className={styles.home}>
      <div className={styles.profile}>
        <p className={styles.intro}>Hello, my name is</p>
        <h2 className={styles.name}>Okechukwu Chidera</h2>
        <p className={styles.skill}>FrontEnd developer</p>

        {mySkills.map((skill, index) => (
          <h3
            key={index}
            className={`${styles.subheading} ${
              index === skillIndex ? styles['active'] : ''
            }`}
          >
            {skill}
          </h3>
        ))}

        <p className={styles.bio}>
          I’m a front-end developer who builds responsive web applications with
          HTML, CSS, JavaScript and frameworks such as React. Occasionally, I
          design websites and graphics even logos too.
        </p>
      </div>
      <div className={styles.projectSnippet}>
        <ProjectDetails />
      </div>
    </section>
  );
}
