import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

document.addEventListener("DOMContentLoaded", () => {
    const email: string = "v.galkin@innopolis.university";
    const apiUrl: string = `https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(email)}`;

    fetch(apiUrl)
        .then((response: Response) => {
            if (!response.ok) {
                throw new Error(`Error fetching comic ID: ${response.statusText}`);
            }
            return response.json();
        })
        .then((data: any) => {
            console.log('Comic ID:', data);
            const comicId: number = data;
            const comicUrl: string = `https://fwd.innopolis.university/api/comic?id=${comicId}`;

            return fetch(comicUrl);
        })
        .then((response: Response) => {
            if (!response.ok) {
                throw new Error(`Error fetching comic data: ${response.statusText}`);
            }
            return response.json();
        })
        .then((comic: any) => {
            console.log('Comic data:', comic);
            const comicContainer: HTMLElement | null = document.getElementById("comic-container");

            if (comicContainer) {
                const img: HTMLImageElement = document.createElement("img");
                img.src = comic.img;
                img.alt = comic.alt;

                const title: HTMLHeadingElement = document.createElement("h4");
                title.textContent = comic.safe_title;

                const date: HTMLParagraphElement = document.createElement("p");
                const comicDate: Date = new Date(comic.year, comic.month - 1, comic.day);
                date.textContent = ` ${comicDate.toLocaleDateString()}`;

                const yearsAgo: HTMLParagraphElement = document.createElement("p");
                yearsAgo.textContent = `Published ${dayjs(comicDate).fromNow()}`;

                comicContainer.appendChild(title);
                comicContainer.appendChild(img);
                comicContainer.appendChild(yearsAgo);
            }
        })
        .catch((error: Error) => {
            console.error("Error fetching comic:", error);
        });
});
