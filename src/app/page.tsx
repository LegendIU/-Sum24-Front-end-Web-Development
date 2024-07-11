import React from "react";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
import Me from "../public/myfoto.png";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <Image src={Me} alt="Me" className={styles.profilePhoto} />
          <div className={styles.profileDetails}>
            <h2>Galkin Vladislav Vadimovich</h2>
            <p>
              <strong>Date of birth:</strong> 05/13/2006
            </p>
            <p>
              <strong>Born in:</strong> Nizhny Novgorod
            </p>
            <p>Studied at Lyceum #165 named the 65th of GAZ</p>
            <p>At the moment I am studying at Innopolis University</p>
            <p>I live in the city Innopolis</p>
          </div>
        </div>
        <div className={styles.projectsSection}>
          <h2>List of projects:</h2>
          <ul className={styles.projectsList}>
            <li>
              Research work for the All-Russian competition among the ninth
              grades (1st place)
            </li>
            <li>
              Teamwork on an application for sports by one of the major Nizhny
              Novgorod gym companies
            </li>
            <li>A little experience working on websites</li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
