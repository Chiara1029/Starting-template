const URL = "https://api.pexels.com/v1/search?query=videogames";

window.onload = () => {
  fetch(URL, {
    method: "GET",
    headers: {
      Authorization: "hg10fOcwsNVvv4G3fJ9o5lDrvkue7PEQL2WjacMGPYbn4b1mLkbCaRAh",
      "Content-Type": "application/json",
    },
  });
};
