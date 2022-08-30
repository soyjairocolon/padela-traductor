const OPTIONS = {
	method: 'get',
	headers: {
		'X-RapidAPI-Key': '3e40edd2b8msh1d118c5aa78d0bfp15df7ejsnb38062fc4253',
		'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
	},
};

fetch('https://text-translator2.p.rapidapi.com/getLanguages', OPTIONS)
	.then((response) => response.json())
	.then((response) => console.log(response))
	.catch((err) => console.error(err));
