// 
   

    $('.form_page1').validate({
//        //Правила
//        rules: {
//            number: {
//                required: true
//            }
//        },
//        //Текста предупреждений
//        messages: {
//            number: {
//                required: "Это поле обязательно для заполнения",
//            }
//        },
        //Обработчик и отправка данных
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type: "POST",
                url: "../mail.php",
                // success: function() {
                //     document.location.replace("../page2.html");
                // }
            });
        }
    });

$('.form_page2').validate({
//        //Правила
//        rules: {
//            number: {
//                required: true
//            }
//        },
//        //Текста предупреждений
//        messages: {
//            number: {
//                required: "Это поле обязательно для заполнения",
//            }
//        },
        //Обработчик и отправка данных
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type: "POST",
                url: "../mail.php",
                // success: function() {
                //     document.location.replace("../page3.html");
                // }
            });
        }
    });

$('.form_page3').validate({
//        //Правила
//        rules: {
//            number: {
//                required: true
//            }
//        },
//        //Текста предупреждений
//        messages: {
//            number: {
//                required: "Это поле обязательно для заполнения",
//            }
//        },
        //Обработчик и отправка данных
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type: "POST",
                url: "../mail.php",
                // success: function() {
                //     document.location.replace("../page4.html");
                // }
            });
        }
    });

$('.form_page4').validate({
//        //Правила
//        rules: {
//            number: {
//                required: true
//            }
//        },
//        //Текста предупреждений
//        messages: {
//            number: {
//                required: "Это поле обязательно для заполнения",
//            }
//        },
        //Обработчик и отправка данных
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type: "POST",
                url: "../mail.php",
                // success: function() {
                //     document.location.replace("../page5.html");
                // }
            });
        }
    });

$('.form_page5').validate({
        //Правила
//        rules: {
//            number: {
//                required: true
//            }
//        },
//        //Текста предупреждений
//        messages: {
//            number: {
//                required: "Это поле обязательно для заполнения",
//            }
//        },
        //Обработчик и отправка данных
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type: "POST",
                url: "../mail.php",
                // success: function() {
                //     document.location.replace("../page6.html");
                // }
            });
        }
    });

$('.form_page6').validate({
        //Правила
//        rules: {
//            number: {
//                required: true
//            }
//        },
//        //Текста предупреждений
//        messages: {
//            number: {
//                required: "Это поле обязательно для заполнения",
//            }
//        },
        //Обработчик и отправка данных
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type: "POST",
                url: "../mail.php",
                // success: function() {
                //     document.location.replace("../page7.html");
                // }
            });
        }
    });

$('.form_page7').validate({
        //Правила
//        rules: {
//            number: {
//                required: true
//            }
//        },
//        //Текста предупреждений
//        messages: {
//            number: {
//                required: "Это поле обязательно для заполнения",
//            }
//        },
        //Обработчик и отправка данных
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type: "POST",
                url: "../mail.php",
                // success: function() {
                //     document.location.replace("../page8.html");
                // }
            });
        }
    });

$('.form_page8').validate({
        //Правила
//        rules: {
//            number: {
//                required: true
//            }
//        },
//        //Текста предупреждений
//        messages: {
//            number: {
//                required: "Это поле обязательно для заполнения",
//            }
//        },
        //Обработчик и отправка данных
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type: "POST",
                url: "../mail.php",
                // success: function() {
                //     document.location.replace("../page9.html");
                // }
            });
        }
    });

$('.form_page9').validate({
        //Правила
//        rules: {
//            number: {
//                required: true
//            }
//        },
//        //Текста предупреждений
//        messages: {
//            number: {
//                required: "Это поле обязательно для заполнения",
//            }
//        },
        //Обработчик и отправка данных
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type: "POST",
                url: "../mail.php",
                // success: function() {
                //     document.location.replace("../page10.html");
                // }
            });
        }
    });

$('.form_page10').validate({
        //Правила
//        rules: {
//            number: {
//                required: true
//            }
//        },
//        //Текста предупреждений
//        messages: {
//            number: {
//                required: "Это поле обязательно для заполнения",
//            }
//        },
        //Обработчик и отправка данных
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type: "POST",
                url: "../mail.php",
                // success: function() {
                //     document.location.replace("../last.html");
                // }
            });
        }
    });

$('.form_last').validate({
//        Правила
        rules: {
            number: {
                required: true
            }
        },
        //Текста предупреждений
        messages: {
            number: {
                required: "Это поле обязательно для заполнения",
            }
        },
        //Обработчик и отправка данных
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type: "POST",
                url: "../mail.php",
                success: function() {
                    alert("Спасибо. Мы скоро с Вами свяжимся!");
                }
            });
        }
    });