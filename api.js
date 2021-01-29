const apiTokens = () => {
  const TIMESTAMP = Date.now();

  const BASE_URL = `https://gateway.marvel.com:443/v1/public/`;

  const API_KEY = `11cdfa1b3a14f24c4d4516f284710424`;

  const PRIVATE_KEY = `496982a3f1e7b1c6cb62155a980437a1583b9305`;

  const HASH = CryptoJS.MD5(TIMESTAMP + PRIVATE_KEY + API_KEY).toString();

  return [TIMESTAMP, BASE_URL, API_KEY, HASH];
};
