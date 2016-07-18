$(function() {
   
    var html = $('#test').html();
    var form = [
        {
        name: 'Петрук Андрій Андрійович',
        study: 'Хмельницького національного університету',
        because: 'Хочу вчити фронтенд, тому, що:',
        one: 'потрібно щось робити у цьому житті',
        two: 'Цікава та добре оплачуєма професія',
        namber: 'Мій контакний телефон',
        chisla: '0977230902',
        profil: 'Мій провіль вк',
        vk: 'https://vk.com/petruk_andriy',
        feedbeck: 'Мій фідбек:',
        want: 'Якщо хочете, то можу зіграти з вами у футбол'
        }
    ];
    var content = tmpl(html, {
        data: form
    });
    
    $('body').append(content);
});