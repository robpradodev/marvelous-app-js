const fetchApi = (_method, params) => {
  const [TIMESTAMP, BASE_URL, API_KEY, HASH] = apiTokens();

  const { resource, offset, limit } = params;

  const ENDPOINT = `${BASE_URL}${resource}?ts=${TIMESTAMP}&apikey=${API_KEY}&hash=${HASH}&limit=${limit}&offset=${offset}`;

  const _response = [];

  fetch(ENDPOINT, { method: _method }).then(response => {
    if(response.ok) return response.json();
  }).then(json => _response.push(json));

  return _response;
};
