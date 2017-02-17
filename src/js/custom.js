jQuery(document).ready(function () {

     var flag = false,
         hoWork =  document.querySelector('.how-work');
    // menu
    $('.link_caret').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        $(this).siblings('.menu__sub').slideToggle();
        return false;
    });


    $('.hamburger').on('click', function (e) {

        $(this).toggleClass('hamburger_active');
        $('.mob-menu').toggleClass('mob-menu_active');
    });

     $('.input-field').on('click', function (e) {

        $(this).addClass('input-field_active');
    });

      $('.input').on('blur', function (e) {

        var inputVal = $(this).val(),
            inputParent = $(this).closest('.input-field');

        if (inputVal === '') {
            inputParent.removeClass('input-field_active');
        }
    });

   if (hoWork) {

    var waypoint = new Waypoint({
        element: hoWork,
        handler: function(direction) {
            $('.how-work__list .animated').addClass('slideInRight');
        },
        offset: '50%'
    });

    }


     $(document).on('scroll', function (e) {

        var scrollTop = $(this).scrollTop(),
            headerTop = $('.header-top');

        if (scrollTop > 200) {

            if (!flag) {
                $('.to-top').fadeIn(500);
                flag = true;
            }

        } else if (scrollTop < 200) {
            $('.to-top').fadeOut(200);
            flag = false;
        }

        if (scrollTop >= 20) {
            headerTop.addClass('header-top_fixed');
        } else {
            headerTop.removeClass('header-top_fixed');
        }
    });

    // button to-top
    $('.to-top').on('click', function (e) {
        var doc = $(document),
            scroll = doc.scrollTop(), // текущий скролл страницы
            dec = 100,            // шаг скроллинга
            loop;

        function scrollTo(dec) {

            scroll -= dec;
            doc.scrollTop(scroll);

            if(scroll < 0) {
                clearInterval(loop);
            }
        }

        loop = setInterval( scrollTo, 10, dec);

    });


    $('.card').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        // $(this).toggleClass('card__active');
    });

      $('.card .btn').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        $('.form-alert').addClass('form-alert_active');
    });

    $('.form-alert').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        if ( $(e.target).hasClass('form-alert') ) {

            $('.form-alert').removeClass('form-alert_active');
        }
    });



    // form validate
   

    // ajax send form
    $('.form__btn').on('click', function (e) {
        e.preventDefault();


        
        var win = $('.msg'),
            // message = $('.form-alert .msg'),
            form = $(this).closest('.form'),
            inputs =  form.find('.input'),
            errorMsg = form.find('.error'),
            valid = validate();


        function validate () {
       
            var valid = true;

            // console.log(inputs );

            inputs.each( function () {

                if ( $(this).val() === '' ) {
                     // console.log($(this).val());
                    valid = false;
                    return false;
                } 
            });
               
            return valid;
        }

        function showMessage(data) {
            win.html(data);
            win.addClass('msg_active');
        }

        if (valid) {

             $.ajax({    
                url: form.attr('action'),
                data: form.serialize(),
                type: 'POST',
                success: function(data){
                    showMessage(data);
                },
                error: function(){
                    showMessage('Ошибка отправки. Пожалуйста, повторите попытку.');
                },
                complete: function(){
                    setTimeout(function () {
                        win.removeClass('msg_active');
                    }, 3000);
                    form[0].reset();
                }
            });
         } else {
            errorMsg.css('opacity', '1');
            setTimeout( function () {
                errorMsg.css('opacity', '0');
            }, 5000);
         }
    });
});


