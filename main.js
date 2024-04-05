const fetchData = async () => {
    try {
        //loading data
        const characterContainer = document.getElementById("anime-container");
        characterContainer.innerHTML = `
        <div class="h-screen flex justify-center items-center">
        <img src="loading.gif" />
        </div>`;

        const response = await fetch("https://api.jikan.moe/v4/top/anime");
        const {data} = await response.json();
        
        //hide loading and display data
        displayAnime(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const displayAnime = (characterList) => {
    const characterContainer = document.getElementById("anime-container");

    characterContainer.innerHTML = characterList.map(character => `
    <div class="character p-4 border border-gray-300 rounded-md shadow-md flex flex-col justify-center items-center bg-sky-600">
     <img src='${character.images.webp.large_image_url}' class="h-[300px] "
     <div id="desc">
       <h1>Judul: ${character.title}</h1>
       <p>Tipe: ${character.type}</p>
       <p>Episode: ${character.episodes}</p>
       <p>Rating: ${character.rating}</p>
     </div>
    </div>
  `).join('')
}

fetchData();