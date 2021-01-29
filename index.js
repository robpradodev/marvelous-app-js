const API_PARAMS = {
  resource: 'characters',
  offset: 0,
  limit: 9,
};

const authenticate = async params => {
  let response = await fetchApi('GET', params);
  return response.data;
};

const getCharacters = async () => {
  let data = await authenticate(API_PARAMS);
  return data.results;
};

const createCardGrid = async () =>{
 
  let characters = await getCharacters();

  const container = document.getElementById('card_grid')
  
  characters.map(character => {
    const {id, name, description, thumbnail} = character;
    const {path, extension} = thumbnail;

    const card = document.createElement('div');

    card.classList = 'card_body';

    const content = `
      <div class="card">
        <div class="card_header" id="heading-${id}">
          <div class="card_body">
            <h5>${name}</h5>
            <p>${description}</p>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += content;
  })
  
}

createCardGrid()