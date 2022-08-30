//Elements DOM
let translateFrom = document.querySelector('#translateFrom');
let translateTo = document.querySelector('#translateTo');

//Get the list of languages from the server
const GET_URL = 'https://text-translator2.p.rapidapi.com/getLanguages';

const OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3e40edd2b8msh1d118c5aa78d0bfp15df7ejsnb38062fc4253',
		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
	},
};

fetch(GET_URL, OPTIONS)
	.then((res) => res.json())
	.then((object) => {
		let languages = object.data.languages;
		console.log();
		//Code needed to load the Select
		languages.forEach((element) => {
			translateFrom.innerHTML += `<option value="${element.code}">${element.name}</option>`;
			translateTo.innerHTML += `<option value="${element.code}">${element.name}</option>`;
		});
	})
	.catch((err) => console.log(err));
