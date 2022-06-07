
const results = document.getElementById('results');



function generateCards(count) {
    const cards = [];
    for(let i = 0; i < count; i++) {
        cards.push(`
            <div class="card">
            <img src="https://placeimg.com/300/200/any?id=${i}" alt="" class="card__img">
            <div class="card__content">
                <h3 class="card__title">Название товара</h3>
                <div class="card__description">Описание товара</div>
                <div class="card__info">
                    <div class="card__param">
                        <label>Год:</label>
                        <div id="year">2022</div>
                    </div>
                    <div class="card__param">
                        <label>Цвет:</label>
                        <div id="color">Красный</div>
                    </div>
                    <div class="card__param">
                        <label>Страна:</label>
                        <div id="country">Россия</div>
                    </div>
                    <div class="card__param">
                        <label>Категория:</label>
                        <div id="color">Техника</div>
                    </div>    
                </div>
                <div class="card__footer">
                    <div class="card__count">
                        <label>Количество:</label>
                        <div id="count">3</div>
                    </div>
                    <div class="card__cost">
                        <label>Цена:</label>
                        <div>300</div>
                    </div>
                </div>
            </div>
            </div>
        `);
    }
    return cards;
}

const cardsArr = generateCards(5);

results.innerHTML = cardsArr.join('');
