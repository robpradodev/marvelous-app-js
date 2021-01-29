const API_PARAMS = {
  resource: 'characters',
  offset: 0,
  limit: 1,
};

const authenticate =  params => {
  return fetchApi('GET', params)
}

console.log(authenticate(API_PARAMS))
