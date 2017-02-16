jQuery(document).ready(function () {

     var flag = false;
    // menu
    $('.link_caret').on('click', function (e) {
        e.preventDefault();

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




    var waypoint = new Waypoint({
        element: $('.how-work'),
        handler: function(direction) {
            $('.how-work__list .animated').addClass('slideInRight');
        },
        offset: '50%'
    });

     $(document).on('scroll', function (e) {

        var scrollTop = $(this).scrollTop();

        if (scrollTop > 200) {

            if (!flag) {
                $('.to-top').fadeIn(500);
                flag = true;
            }

        } else if (scrollTop < 200) {
            $('.to-top').fadeOut(200);
            flag = false;
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
    $('#order .btn').on('click', function (e) {
        e.preventDefault();


        
        var win = $('.form-alert'),
            message = $('.form-alert .msg'),
            errorMsg = $('.error'),
            form = document.querySelector('#order'),
            inputs =  $(this).closest('#order').find('.input'),
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
            win.css('display','flex');
        }

        if (valid) {

             $.ajax({    
                url: './contact.php',
                data: $(this).closest('#order').serialize(),
                type: 'POST',
                success: function(data){
                    showMessage(data);
                },
                error: function(){
                    showMessage('Ошибка отправки. Пожалуйста, повторите попытку.');
                },
                complete: function(){
                    setTimeout(function () {
                        // win.fadeOut(500);
                         $('.form-alert').removeClass('form-alert_active');
                    }, 3000);

                    form.reset();
                }
            });
         } else {
            errorMsg.css('display', 'block');
            setTimeout( function () {
                errorMsg.css('display', 'none');
            }, 5000);
         }
    });
});


