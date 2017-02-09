jQuery(document).ready(function () {

    







    // form validate
    // function validate () {
       
    //     var valid = true,
    //         inputs =  $('#orderForm input').not('#agree'),
    //         textarea = $('#message');

    //    inputs.each( function () {

    //         if ( $(this).val() === '' ) {
    //             valid = false;
    //             return false;
    //         } 
    //    });

    //    if (valid) {
    //         valid = !(textarea.val() === '');

    //         if (valid) {
    //             valid = agree.checked;
    //         }
    //    } 
      
    //   return valid;
    // }

    // // ajax send form
    // $('#orderForm .button').on('click', function (e) {
    //     e.preventDefault();
        
    //     var win = $('.alert'),
    //         message = $('.alert__body'),
    //         errorMsg = $('.msg'),
    //         form = document.querySelector('#orderForm'),
    //         valid = validate ();

    //     function showMessage(data) {
    //         message.text(data);
    //         win.css('display','flex');
    //     }

    //     if (valid) {

    //          $.ajax({    
    //             url: $("#orderForm").attr('action'),
    //             data: $("#orderForm").serialize(),
    //             type: 'POST',
    //             success: function(data){
    //                 showMessage(data);
    //             },
    //             error: function(){
    //                 showMessage('Ошибка отправки. Пожалуйста, повторите попытку.');
    //             },
    //             complete: function(){
    //                 setTimeout(function () {
    //                     win.fadeOut(500);
    //                 }, 3000);

    //                 form.reset();
    //             }
    //         });
    //      } else {
    //         errorMsg.css('opacity', '1');
    //         setTimeout( function () {
    //             errorMsg.css('opacity', '0');
    //         }, 5000);
    //      }
    // });
});


