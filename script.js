//Elements DOM
let translateFrom = document.querySelector("#translateFrom");
let translateTo = document.querySelector("#translateTo");

//Get the list of languages from the server
const GET_URL = "https://text-translator2.p.rapidapi.com/getLanguages";
const POST_URL = "https://text-translator2.p.rapidapi.com/translate";

const OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3e40edd2b8msh1d118c5aa78d0bfp15df7ejsnb38062fc4253",
    "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
  },
};

let source_language = "es";
let target_language = "af";

fetch(GET_URL, OPTIONS)
  .then((res) => res.json())
  .then((object) => {
    let languages = object.data.languages;

    //Code needed to load the Select
    languages.forEach((element) => {
      translateFrom.innerHTML += `<option value="${element.code}">${element.name}</option>`;
      translateTo.innerHTML += `<option value="${element.code}">${element.name}</option>`;
    });
    translateFrom.addEventListener("click", () => {
      source_language = translateFrom.value;
    });
    translateTo.addEventListener("click", () => {
      target_language = translateTo.value;
    });
  })
  .catch((err) => console.log(err));

// (Submit) Collect the data from the input to send it to the server
let translate = document.querySelector("#translate");
let translateToResult = document.querySelector("#outputTranslate");

translate.addEventListener("click", () => {
  let inputTranslate = document.querySelector("#inputTranslate");
  let textToTranslate = inputTranslate.value;

  const encodedParams = new URLSearchParams();
  encodedParams.append("source_language", source_language);
  encodedParams.append("target_language", target_language);
  encodedParams.append("text", textToTranslate);

  const OPTION = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "3e40edd2b8msh1d118c5aa78d0bfp15df7ejsnb38062fc4253",
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
    },
    body: encodedParams,
  };

  fetch(POST_URL, OPTION)
    .then((response) => response.json())
    .then(
      (response) => (translateToResult.value = response.data.translatedText)
    )
    .catch((err) => console.error(err));
});

// MOSTRAR AÑO ACTUAL
// Seleccionar el span por su ID y asignarle el año actual
const yearSpan = document.getElementById("current-year");
yearSpan.textContent = new Date().getFullYear();
