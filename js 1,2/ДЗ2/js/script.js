var massiv = [];
for (var i = 0; i < 5; i++) {
    massiv.push(prompt('vvedite name'));
}

var name = prompt('vvedite login');

var login;
for (var i = 0; i < 5; i++) {
    if (massiv[i] == name) {
        login = true;
        break;
    }
}
if (login) {
    alert(name + ' ,вы вошли успешно');
} else {
    alert('Ошибка');
}




