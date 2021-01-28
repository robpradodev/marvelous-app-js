const TIMESTAMP = Date.now();

const BASE_URL = `http://gateway.marvel.com/v1/public/`;

const API_KEY = `11cdfa1b3a14f24c4d4516f284710424`;

const PRIVATE_KEY = `496982a3f1e7b1c6cb62155a980437a1583b9305`;

const API_PARAMS = {
  resource: 'characters',
  offset: 0,
  limit: 1,
};

const { resource, offset, limit } = API_PARAMS;

const HASH = CryptoJS.MD5(TIMESTAMP + PRIVATE_KEY + API_KEY);

console.log(
  `${BASE_URL}${resource}?&limit=${limit}&offset=${offset}&ts=${TIMESTAMP}&apikey=${API_KEY}&hash=${HASH}`
);
