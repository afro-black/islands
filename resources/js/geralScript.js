
$(".onlyNumbers").keypress(function () {
    this.value = (this.value + '').replace(/[^0-9]/g, '');

});


function validation1(_element) {
    var validation;
    _element.each(function () {
        if (isEmpty($(this)) && !$(this).hasClass("_noObrigatory")) {
            $(this).focus();
            validation = false;
            return false;
        } else {
            validation = true;
        }
    });
    return validation;

}

function isValueEmpty(element) {
    if (element.attr('type') === 'password')
        return (element.val().length < 1);
    else if(element.val() === null)
        return true;
    else
        return (element.val().replace(/\s/g, '') === '' || (element.val() === '' && element[0]["localName"] === "select") );
}

/* Function to format numbers with "space" using as parameter a input*/
function formatted(nStr) {

    var num = nStr.val().replace(/(\s)/g, '');
    nStr.val(num.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 "));

}

$('.formatNumber').on('keyup', function () {

    formatted($(this));

});

function unformatted(nStr) {

    if(nStr !== '')
        return parseFloat(nStr.replace(/\s/g , '').replace(/,/g, '.'));
    else
        return 0;
}

$('*').on("keypress", ".integer", function (event) {
    if ((event.which !== 44 || $(this).val().indexOf('/') !== -1) &&
        ((event.which < 48 || event.which > 57) &&
        (event.which !== 0 && event.which !== 8))) {
        event.preventDefault();
    }
}).on("keypress", ".double", function (event) {

    if ((event.which !== 44 || $(this).val().indexOf(',') !== -1) &&
        ((event.which < 48 || event.which > 57) &&
        (event.which !== 0 && event.which !== 8))) {
        event.preventDefault();
    }

    var text = $(this).val();

    if ((text.indexOf(',') !== -1) &&
        (text.substring(text.indexOf(',')).length > 6) &&
        (event.which !== 0 && event.which !== 8) &&
        ($(this)[0].selectionStart >= text.length - 6)) {
        event.preventDefault();
    }
}).on("keyup", ".integer", function () {
    $(this).val($(this).val().replace(/[^\d]+/g,''))
});



function isMailValid(email)
{
    var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    var info = email.val();
    return filtro.test(info) || email.val() === "";
}

function replaceComma(value) {
    if(value.$$(","))
        return value.replace(",", ".");
    else
        return value;
}

/**
 *
 * @param dateI
 * @param dateF
 * @returns {boolean} true se data inicial
 * for inferior a final e false caso contrario
 */
function compareDates(dateI, dateF){
    var firstDate = Date.parse(dateI);
    var secondDate = Date.parse(dateF);

    if(firstDate < secondDate)
        return true;
    else if (firstDate === secondDate)
        return true;
    else
        return false;
}


$('body').on('click', '.x-mastep div span:last-child', function(event) {
    remStep($(this));
});
function addStep(_desc, i, el){

    idx = el.children('div').length + 1;
    initial = el.children().length  < 1 ? '<span i="'+i+'" location="Início">0</span>' : '';
    temp = initial + '<div><span></span><span i="'+i+'" location="'+ _desc +'">'+ idx +'</span></div>';

    el.append(temp);
}
function remStep(el){
    master = el.closest('.x-mastep');
    if(master.children('div').length  == 1)
        el.parent().siblings().remove();
    el.parent().remove();
    master.find('div').each(function(index, el) {
        $(this).find('span:last-child').text($(this).index());
    });
}

function compareSystemDate(date) {
    var dataAtual = new Date();
    dataAtual = dataAtual.getDatePt();
    dataAtual = Date.parse(dataAtual);
    date = Date.parse(date);

    if(date > dataAtual)return false;
    else return true;
}
