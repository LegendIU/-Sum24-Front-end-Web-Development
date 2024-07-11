"use client"; // Add this line at the top

import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import styles from "../../styles/Comic.module.css";

interface Comic {
  month: string;
  num: number;
  link: string;
  year: string;
  news: string;
  safe_title: string;
  transcript: string;
  alt: string;
  img: string;
  title: string;
  day: string;
}

const Comic: React.FC = () => {
  const [comic, setComic] = useState<Comic | null>(null);

  useEffect(() => {
    const fetchComic = async () => {
      try {
        const email = "v.galkin@innopolis.university";
        const apiUrl = `https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(email)}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`Error fetching comic ID: ${response.statusText}`);
        }
        const data = await response.json();
        const comicId = data;
        const comicUrl = `https://fwd.innopolis.university/api/comic?id=${comicId}`;
        const comicResponse = await fetch(comicUrl);
        if (!comicResponse.ok) {
          throw new Error(
            `Error fetching comic data: ${comicResponse.statusText}`
          );
        }
        const comicData = await comicResponse.json();
        setComic(comicData);
      } catch (error) {
        console.error("Error fetching comic:", error);
      }
    };

    fetchComic();
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.comicSection}>
          <h3>Today&apos;s XKCD Comic</h3>
          <div id="comic-container" className={styles.comicContainer}>
            {comic && (
              <>
                <h4>{comic.safe_title}</h4>
                <img src={comic.img} alt={comic.alt} />
                <p>
                  Published on:{" "}
                  {new Date(
                    Number(comic.year),
                    Number(comic.month) - 1,
                    Number(comic.day)
                  ).toLocaleDateString()}
                </p>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Comic;
