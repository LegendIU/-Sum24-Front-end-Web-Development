document.addEventListener("DOMContentLoaded", () => {
    const email = "v.galkin@innopolis.university";
    const apiUrl = `https://fwd.innopolis.university/api/hw2?email=${encodeURIComponent(email)}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error fetching comic ID: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Comic ID:', data);
            const comicId = data;
            const comicUrl = `https://fwd.innopolis.university/api/comic?id=${comicId}`;

            return fetch(comicUrl);
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error fetching comic data: ${response.statusText}`);
            }
            return response.json();
        })
        .then(comic => {
            console.log('Comic data:', comic);
            const comicContainer = document.getElementById("comic-container");

            const img = document.createElement("img");
            img.src = comic.img;
            img.alt = comic.alt;

            const title = document.createElement("h4");
            title.textContent = comic.safe_title;

            const date = document.createElement("p");
            const comicDate = new Date(comic.year, comic.month - 1, comic.day);
            date.textContent = `Published on: ${comicDate.toLocaleDateString()}`;

            comicContainer.appendChild(title);
            comicContainer.appendChild(img);
            comicContainer.appendChild(date);
        })
        .catch(error => {
            console.error("Error fetching comic:", error);
        });
});
