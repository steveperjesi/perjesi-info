
export const camelize = (string) => {
	return string.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
		return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
	}).replace(/\s+|[-]/g, "");
}

export const capitalizeFirstLetter = (string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
}