import { useEffect, useState } from "react";
import styles from "./Home.module.css";

export default function Home() {
  const mySkills = [
    `I develop web applications`,
    `I design web applications`,
    `I design graphics & logos`,
    `I'm a Biomedical Scientist`,
  ];
  const [skillIndex, setSkillIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSkillIndex((prevIndex) => (prevIndex + 1) % mySkills.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={styles.home}>
      <p className={styles.intro}>Hello, my name is</p>
      <h2 className={`${styles.name} typing-animation`}>Okechukwu Chidera</h2>
      <p className={styles.skill}>FrontEnd developer</p>

      {mySkills.map((skill, index) => (
        <h3
          key={index}
          className={`${styles.subheading} ${
            index === skillIndex ? styles["active"] : ""
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
    </section>
  );
}
