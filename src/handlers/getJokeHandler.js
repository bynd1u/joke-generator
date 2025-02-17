import dom from "../dom.js";

const getJokeHandler = async () => {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
        const data = await response.json();
        dom.joke.innerText = data.joke;
        console.log(data.joke);
    } catch (error) {
        console.error('Error fetching joke:', error);
        joke.textContent = 'Failed to fetch joke. Please try again.';
    }
};

export default getJokeHandler;