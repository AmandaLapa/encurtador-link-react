//buscar os links salvos
export async function getLinksSave(key) {
	const myLinks = await localStorage.getItem(key);

	let linksSaves = JSON.parse(myLinks) || [];
	return linksSaves;
}

//salvar um link no local storage
export async function saveLink(key, newLink) {
	let linksStored = await getLinksSave(key);

	//se ja tiver link salvo com ID, nao deixar duplicar
	//recebe todos os links e verificar se bate com algum existente
	const hasLink = linksStored.some((link) => link.id === newLink.id);

	if (hasLink) {
		console.log("Esse link já existe na lista");
		return;
	}

	//adicionar esse novo link na lista
	linksStored.push(newLink);
	await localStorage.setItem(key, JSON.stringify(linksStored));
	console.log("Link salvo com sucesso");
}

//deletar algum link salvo
export function deleteLink(links, id) {
	let myLinks = links.filter((item) => {
		return item.id !== id;
	});

	localStorage.setItem("@encurtaLink", JSON.stringify(myLinks));
	console.log("Link deletado com sucesso");
	return myLinks;
}
