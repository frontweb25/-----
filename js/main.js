
const domElements = {
    results: document.getElementById('results'),
    search: {
        input: document.getElementById('search-input'),
        button: document.getElementById('search-button')
    }
};



function generateCards(data) {
    const cards = [];
    for(let i = 0; i < data.length; i++) {
        let countClass = 'card__count';
        let countValue = data[i].count;

        if(data[i].count === 0) {
            countClass = 'card__count card__count_empty';
            countValue = 'Нет в наличии';
        }
        cards.push(`
            <div class="card">
            <img src="https://placeimg.com/300/200/any?id=${i}" alt="" class="card__img">
            <div class="card__content">
                <h3 class="card__title">${data[i].title}</h3>
                <div class="card__description">${data[i].description}</div>
                <div class="card__info">
                    <div class="card__param">
                        <label>Год:</label>
                        <div id="year">${data[i].params.year}</div>
                    </div>
                    <div class="card__param">
                        <label>Цвет:</label>
                        <div id="color">${data[i].params.color}</div>
                    </div>
                    <div class="card__param">
                        <label>Страна:</label>
                        <div id="country">${data[i].params.country}</div>
                    </div>
                    <div class="card__param">
                        <label>Категория:</label>
                        <div id="color">${data[i].params.category}</div>
                    </div>    
                </div>
                <div class="card__footer">
                    <div class="${countClass}">
                        <label>Количество:</label>
                        <div id="count">${countValue}</div>
                    </div>
                    <div class="card__cost">
                        <label>Цена:</label>
                        <div>${data[i].cost}</div>
                    </div>
                </div>
            </div>
            </div>
        `);
    }
    return cards;
}

//Генерация карточек
const cardsArr = generateCards(cardsData);
domElements.results.innerHTML = cardsArr.join('');


//Поиск товаров


let searchValue = '';
// Изменение значения поля поиска
domElements.search.input.oninput = (event) => {
    const target = event.target;
    searchValue = target.value;
};

//Клик по кнопке поиска
domElements.search.button.onclick = () => {
    filterSearch();
};


//Функция фильтрации найденых товаров
function filterSearch() {
  const rgx = new RegExp(searchValue, 'i');
  let filteredCardsData = cardsData.filter(card => {
        if(rgx.test(card.title)) {
            return true;
        } else {
            return false;
        }
    }); 
    const newFilteredCardsHTML = generateCards(filteredCardsData);

    domElements.results.innerHTML = newFilteredCardsHTML.join('');
}