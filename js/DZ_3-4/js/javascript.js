var obj = {
    header: '<h3>Тест по программированию</h3>',
    firstQuastion:'Вопрос N1',
    secondQuastion:'Вопрос N2',
    thirdQuastion:'Вопрос N3',
    chekAnswerFirst: 'Вариант ответа N1',
    chekAnswerSecond: 'Вариант ответа N2',
    chekAnswerThird: 'Вариант ответа N3',
    result: '<h3>Проверить мои результаты</h3>'
}
// создаем wrapper
var wrapper = document.createElement('div');

var parent = document.body;
wrapper.className = 'wrapper';
parent.appendChild(wrapper);



// создаем header
var header = document.createElement('header');

var body = document.querySelector('.wrapper');
body.appendChild(header);
header.innerHTML = obj.header;


// создаем вопрос N1

var ol = document.createElement('ol');

var lo = document.querySelector('.wrapper');
lo.appendChild(ol);


var li = document.createElement('li');

var il = document.querySelector('ol');
il.appendChild(li);
li.innerHTML = obj.firstQuastion;
li.classList.add('first');


var ul = document.createElement('ul');

var lu = document.querySelector('.first');
lu.appendChild(ul);


var liFirst = document.createElement('li');

var ilFirst = document.querySelector('.first ul');
ilFirst.appendChild(liFirst);

// создаем ответ 1
var input = document.createElement('input');
input.setAttribute('type', 'checkbox');
input.setAttribute('id', 'otvet1');
var inpu = document.querySelector('.first ul li');
inpu.appendChild(input);

var label = document.createElement('label');
label.setAttribute('for', 'otvet1');
var labe = document.querySelector('.first ul li');
labe.appendChild(label);
label.innerHTML = obj.chekAnswerFirst;
// 1



var liSecond = document.createElement('li');

var ilSecond = document.querySelector('.first ul');
ilSecond.appendChild(liSecond);

// создаем ответ 2
var input2 = document.createElement('input');
input2.setAttribute('type', 'checkbox');
input2.setAttribute('id', 'otvet2');
var inpu2 = document.querySelector('.first ul li:nth-child(2)');
inpu2.appendChild(input2);

var label2 = document.createElement('label');
label2.setAttribute('for', 'otvet2');
var labe2 = document.querySelector('.first ul li:nth-child(2)');
labe2.appendChild(label2);
label2.innerHTML = obj.chekAnswerSecond;
// 2

var liThird = document.createElement('li');

var ilThird = document.querySelector('.first ul');
ilThird.appendChild(liThird);

// создаем ответ 3
var input3 = document.createElement('input');
input3.setAttribute('type', 'checkbox');
input3.setAttribute('id', 'otvet3');
var inpu3 = document.querySelector('.first ul li:nth-child(3)');
inpu3.appendChild(input3);

var label3 = document.createElement('label');
label3.setAttribute('for', 'otvet3');
var labe3 = document.querySelector('.first ul li:nth-child(3)');
labe3.appendChild(label3);
label3.innerHTML = obj.chekAnswerThird;
// 3


// конец вопрос N1

// создаем вопрос №2

var li2 = document.createElement('li');

var il2 = document.querySelector('ol');
il2.appendChild(li2);
li2.innerHTML = obj.secondQuastion;
li2.classList.add('second'); 


var ul = document.createElement('ul');

var lu = document.querySelector('.second');
lu.appendChild(ul);


var liFirst2 = document.createElement('li');

var ilFirst2 = document.querySelector('.second ul');
ilFirst2.appendChild(liFirst2);

// создаем ответ 1
var input21 = document.createElement('input');
input21.setAttribute('type', 'checkbox');
input21.setAttribute('id', 'otvet21');
var inpu21 = document.querySelector('.second ul li');
inpu21.appendChild(input21);

var label21 = document.createElement('label');
label21.setAttribute('for', 'otvet21');
var labe21 = document.querySelector('.second ul li');
labe21.appendChild(label21);
label21.innerHTML = obj.chekAnswerFirst;
// 1



var liSecond2 = document.createElement('li');

var ilSecond2 = document.querySelector('.second ul');
ilSecond2.appendChild(liSecond2);

// создаем ответ 2
var input22 = document.createElement('input');
input22.setAttribute('type', 'checkbox');
input22.setAttribute('id', 'otvet22');
var inpu22 = document.querySelector('.second ul li:nth-child(2)');
inpu22.appendChild(input22);

var label22 = document.createElement('label');
label22.setAttribute('for', 'otvet22');
var labe22 = document.querySelector('.second ul li:nth-child(2)');
labe22.appendChild(label22);
label22.innerHTML = obj.chekAnswerSecond;
// 2


var liThird2 = document.createElement('li');

var ilThird2 = document.querySelector('.second ul');
ilThird2.appendChild(liThird2);

// создаем ответ 3
var input23 = document.createElement('input');
input23.setAttribute('type', 'checkbox');
input23.setAttribute('id', 'otvet23');
var inpu23 = document.querySelector('.second ul li:nth-child(3)');
inpu23.appendChild(input23);

var label23 = document.createElement('label');
label23.setAttribute('for', 'otvet23');
var labe23 = document.querySelector('.second ul li:nth-child(3)');
labe23.appendChild(label23);
label23.innerHTML = obj.chekAnswerThird;
// 3

// конец вопрос №2
// создаем вопрос №3

var li3 = document.createElement('li');

var il3 = document.querySelector('ol');
il3.appendChild(li3);
li3.innerHTML = obj.thirdQuastion;
li3.classList.add('third');


var ul = document.createElement('ul');

var lu = document.querySelector('.third');
lu.appendChild(ul);


var liFirst3 = document.createElement('li');

var ilFirst3 = document.querySelector('.third ul');
ilFirst3.appendChild(liFirst3);

// создаем ответ 1
var input31 = document.createElement('input');
input31.setAttribute('type', 'checkbox');
input31.setAttribute('id', 'otvet31');
var inpu31 = document.querySelector('.third ul li');
inpu31.appendChild(input31);

var label31 = document.createElement('label');
label31.setAttribute('for', 'otvet31');
var labe31 = document.querySelector('.third ul li');
labe31.appendChild(label31);
label31.innerHTML = obj.chekAnswerFirst;
// 1


var liSecond3 = document.createElement('li');

var ilSecond3 = document.querySelector('.third ul');
ilSecond3.appendChild(liSecond3);

// создаем ответ 2
var input32 = document.createElement('input');
input32.setAttribute('type', 'checkbox');
input32.setAttribute('id', 'otvet32');
var inpu32 = document.querySelector('.third ul li:nth-child(2)');
inpu32.appendChild(input32);

var label32 = document.createElement('label');
label32.setAttribute('for', 'otvet32');
var labe32 = document.querySelector('.third ul li:nth-child(2)');
labe32.appendChild(label32);
label32.innerHTML = obj.chekAnswerSecond;
// 2

var liThird3 = document.createElement('li');

var ilThird3 = document.querySelector('.third ul');
ilThird3.appendChild(liThird3);

// создаем ответ 3
var input33 = document.createElement('input');
input33.setAttribute('type', 'checkbox');
input33.setAttribute('id', 'otvet33');
var inpu33 = document.querySelector('.third ul li:nth-child(3)');
inpu33.appendChild(input33);

var label33 = document.createElement('label');
label33.setAttribute('for', 'otvet33');
var labe33 = document.querySelector('.third ul li:nth-child(3)');
labe33.appendChild(label33);
label33.innerHTML = obj.chekAnswerThird;
// 3
// конец вопрос №3

// создаем кнопку
var finish = document.createElement('div');

var parent = document.body;
finish.className = 'finish';
parent.appendChild(finish);


var button = document.createElement('button');
var butto = document.querySelector('.finish');
butto.appendChild(button);
button.innerHTML = obj.result;