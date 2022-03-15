//Инициализируем слайдер
$('.slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
});

//Раскрытие вопросов
$(document).on('click', '.answer', function() {
    $(this).toggleClass('open');
    $(this).find('.answer__ico').toggleClass('answer__ico1');
})

//Кастомный фильтр 'Category'
$(document).on('click', '.input__category', function() {
    $(this).toggleClass('open');
    $(this).parent().find('.input__select').toggleClass('hide');
});

let noneSel =  document.createElement('div');
noneSel.className = "none_sel";
noneSel.textContent = 'None Selected';
$(document).on('click', '.input__select .input__category-item', function() {
    noneSel.remove();
    $('#input__category').append($(this));
});

$(document).on('click', '.input__category .input__category-item', function(event) {
    event.stopPropagation();
    $('#input__select').append($(this));
    if ($('#input__category').children().length < 1) {
        $('#input__category').append(noneSel);
    }
});
//Конец кастомного фильтра 'Category'

// Модальное окно
let modal = document.getElementById('modal');
let btn = document.getElementById("btn-modal");
let span = document.getElementsByClassName("close")[0];
let addcard = document.getElementById("add-card");
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Добавление новой карточки
let imgUrl = null;
$(function () { //Замена изображения
    $(":file").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();

            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });
});
function imageIsLoaded(e) {
    imgUrl = e.target.result;
};
//Генерация карточки из данных формы
addcard.onclick = function() {
    modal.style.display = "none";

    let inputGenre = $('#genre-form').val();
    let inputGenreText = $('#genre-form').find('option:selected').text();
    let inputName = $('#form-name').val();
    let inputDesc = $('#form-desc').val();
    let inputPrice = $('#form-price').val();
    let firstCard = document.querySelector('.card');

    let div1 = document.createElement('div');
    div1.className = "card";
    firstCard.after(div1);


    let img1 = document.createElement('img');
    img1.className = "card__img";
    img1.src = imgUrl;
    div1.append(img1);


    let div2 = document.createElement('div');
    div2.className = "card__content";
    div1.append(div2);

    let div3 = document.createElement('div');
    div3.className = "card__genre " + inputGenre;
    div3.textContent = inputGenreText;
    div2.append(div3);

    let div4 = document.createElement('div');
    div4.className = "card__title";
    div4.textContent = inputName;
    div2.append(div4);

    let div5 = document.createElement('div');
    div5.className = "card__rating";
    div2.append(div5);

    let div6 = document.createElement('div');
    div6.className = "rating";
    div5.append(div6);

    let div7 = document.createElement('div');
    div7.className = "rating__star";
    div6.append(div7);

    let div8 = document.createElement('div');
    div8.className = "rating__star";
    div6.append(div8);

    let div9 = document.createElement('div');
    div9.className = "rating__star";
    div6.append(div9);

    let div10 = document.createElement('div');
    div10.className = "rating__star";
    div6.append(div10);

    let div11 = document.createElement('div');
    div11.className = "rating__star";
    div6.append(div11);

    let div12 = document.createElement('div');
    div12.className = "rating__grade";
    div12.textContent = 0;
    div5.append(div12);

    let div13 = document.createElement('div');
    div13.className = "card__desc";
    div13.textContent = inputDesc;
    div2.append(div13);

    let div14 = document.createElement('div');
    div14.className = "card__bottom";
    div1.append(div14);

    let div15 = document.createElement('div');
    div15.className = "line";
    div14.append(div15);

    let div16 = document.createElement('div');
    div16.className = "card__price";
    div14.append(div16);

    let div17 = document.createElement('div');
    div17.className = "price-wrap";
    div16.append(div17);

    let div18 = document.createElement('div');
    div18.className = "price";
    div18.textContent = inputPrice;
    div17.append(div18);

    $('#modal').trigger("reset");
}
//Конец добавления новой карточки

//Кнопка фильтров в моб. версии
$(document).on('click', '.btn-filter', function() {
    $('.filter__category').toggleClass('d-block');
    $('.filter__sort').toggleClass('d-block');
});