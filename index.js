const routes = {
  '/': login,
  '/home': home,
  '/details': details,
};

const API_PARAMS = {
  resource: 'characters',
  offset: 0,
  limit: 1,
};

const rootDiv = document.getElementById('root');

window.onload = () => {
  rootDiv.innerHTML = login;
};

const handleNavigate = pathname => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname];
};

const handleLogin = event => {
  event.preventDefault();
  handleNavigate('/home');
  createCardGrid();
};

const authenticate = async params => {
  let response = await fetchApi('GET', params);
  return response.data;
};

const getCharacters = async () => {
  let data = await authenticate(API_PARAMS);
  return data.results;
};

const createCardGrid = async () => {
  let characters = await getCharacters();

  const container = document.getElementById('card_grid');

  characters.map(character => {
    const { id, name, description, thumbnail } = character;
    const { path, extension } = thumbnail;

    const card = document.createElement('div');

    card.classList = 'card_body';

    const content = `
      <div class="card">
        <div class="card_header" id="heading-${id}">
          <div class="card_body">
            <h5>${name}</h5>
            <div class="card_img_container">
              <img class="card_img" src="${path}.${extension}" alt="${name}">
            </div>
            <p>${description}</p>
            <button class="card_button">
              <a href="#" onclick="handleNavigate('/details'); return false">GO!
              </a>
            </button>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += content;
  });
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname]
}