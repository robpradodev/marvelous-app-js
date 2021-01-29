const fetchApi = async (_method, params) => {
  const [TIMESTAMP, BASE_URL, API_KEY, HASH] = apiTokens();

  const { resource, offset, limit } = params;

  const ENDPOINT = `${BASE_URL}${resource}?ts=${TIMESTAMP}&apikey=${API_KEY}&hash=${HASH}&limit=${limit}&offset=${offset}`;

  

 const _response = await fetch(ENDPOINT, { method: _method }).then(response => {
    if(response.ok) return response.json();
  }).then(data => data);

  return _response;
};
