export const getResourse = async (url) => {
	const response = await fetch(url);
	const data = await response.json();

	return data;
};

export const postResourse = async (url, data) => {
	const response = await fetch(url, {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	await response.json();
};
