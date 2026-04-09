export const withBase = (path: string, baseUrl: string) => {
	if (!path || /^([a-z]+:)?\/\//i.test(path) || path.startsWith('data:') || path.startsWith('#')) {
		return path;
	}

	const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
	const normalizedPath = path.startsWith('/') ? path.slice(1) : path;

	return `${normalizedBase}${normalizedPath}`;
};