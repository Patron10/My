$(function() {
    
    $('.button').on('click', search);
    
    $('.search').keypress(function() {
        if (event.keyCode == 13) {
            search;
        } else return;
    });
    
    
    function search(e) {
        e.preventDefault();
        $('img').remove();
        
        var searchKey = $('.search').val();
        
        $.ajax ({
            url: 'https://pixabay.com/api/?key=2650584-e8feab9b11ed644dcec728ac9&q=' + searchKey + '&image_type=photo',
            dataType: 'jsonp',
            success: function(data) {
                var results = data.hits;
                for (var i = 0; i < 10; i++) {
                    $('.result').append('<img src="' + results[i].previewURL + '">');
                }
            },
            
            error: function () {
                alert('Error!');
            }
        });
        
        $('.search').val('');
    }
    
});

/// prototype

function Human(name, age, gender, height, weight) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
    }

    function Worker(name, age, gender, height, weight, workplace, sale) {
        Human.apply(this, arguments);
        this.workplace = workplace;
        this.sale = sale;
        this.work = 'Работать';
    }
    function Student(name, age, gender, height, weight, study, sale) {
        Human.apply(this, arguments);
        this.study = study;
        this.sale = sale;
        this.work = 'Смотреть сериалы';
    }


    Human.prototype.do = function() {
        console.log('Занятие: ' + this.work);
    }
    
    Worker.prototype = new Human();
    Student.prototype = new Human();
    Worker.prototype.constructor = Worker;
    Student.prototype.constructor = Student;
    var newHuman = new Human();

    var Andriy = new Worker('Andriy', 22, 'male', 180, 90, 'kantora', 3000);
    console.log(Andriy);
    Andriy.do();

    var Sofia = new Worker('Sofia', 33, 'female', 160, 40, 'diplomat', 5000);
    console.log(Sofia);
    Sofia.do();

    var Maksim = new Student('Maksim', 20, 'male', 180, 100, 'university', 900);
    console.log(Maksim);
    Maksim.do();

    var Liza = new Student('Liza', 16, 'female', 170, 55, 'university', 900);
    console.log(Liza);
    Liza.do();