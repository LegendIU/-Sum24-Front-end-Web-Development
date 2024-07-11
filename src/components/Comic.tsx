// src/components/Comic.tsx

import React, { useEffect, useState } from 'react';
import { Comic as ComicType } from '../types';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import './Comic.css';

dayjs.extend(relativeTime);

const Comic: React.FC = () => {
    const [comic, setComic] = useState<ComicType | null>(null);
    const email = "your-email@example.com"; // Замените на ваш email

    useEffect(() => {
        const fetchComicId = async (): Promise<number> => {
            const response = await fetch(`https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(email)}`);
            const data = await response.json();
            return data.id;
        };

        const fetchComic = async (id: number): Promise<ComicType> => {
            const response = await fetch(`https://fwd.innopolis.university/api/comic?id=${id}`);
            const data = await response.json();
            return data;
        };

        const loadComic = async () => {
            const comicId = await fetchComicId();
            const comicData = await fetchComic(comicId);
            setComic(comicData);
        };

        loadComic();
    }, [email]);

    if (!comic) {
        return <div>Loading...</div>;
    }

    const comicDate = dayjs(`${comic.year}-${comic.month}-${comic.day}`);

    return (
        <div className="comic-container">
            <h4>{comic.safe_title}</h4>
            <img src={comic.img} alt={comic.alt} />
            <p>Published: {comicDate.format('MMMM D, YYYY')} ({comicDate.fromNow()})</p>
        </div>
    );
};

export default Comic;
