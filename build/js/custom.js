jQuery(document).ready(function(){var t=!1,e=document.querySelector(".how-work");if($(".link_caret").on("click",function(t){return t.preventDefault(),t.stopPropagation(),$(this).siblings(".menu__sub").slideToggle(),!1}),$(".hamburger").on("click",function(t){$(this).toggleClass("hamburger_active"),$(".mob-menu").toggleClass("mob-menu_active")}),$(".input-field").on("click",function(t){$(this).addClass("input-field_active")}),$(".input").on("blur",function(t){var e=$(this).val(),o=$(this).closest(".input-field");""===e&&o.removeClass("input-field_active")}),e){new Waypoint({element:e,handler:function(t){$(".how-work__list .animated").addClass("slideInRight")},offset:"50%"})}$(document).on("scroll",function(e){var o=$(this).scrollTop(),n=$(".header-top");o>200?t||($(".to-top").fadeIn(500),t=!0):o<200&&($(".to-top").fadeOut(200),t=!1),o>=20?n.addClass("header-top_fixed"):n.removeClass("header-top_fixed")}),$(".to-top").on("click",function(t){function e(t){a-=t,n.scrollTop(a),a<0&&clearInterval(o)}var o,n=$(document),a=n.scrollTop(),i=100;o=setInterval(e,10,i)}),$(".card").on("click",function(t){t.preventDefault(),t.stopPropagation()}),$(".card .btn").on("click",function(t){t.preventDefault(),t.stopPropagation(),$(".form-alert").addClass("form-alert_active")}),$(".form-alert").on("click",function(t){t.preventDefault(),t.stopPropagation(),$(t.target).hasClass("form-alert")&&$(".form-alert").removeClass("form-alert_active")}),$(".form__btn").on("click",function(t){function e(){var t=!0;return i.each(function(){if(""===$(this).val())return t=!1,!1}),t}function o(t){n.html(t),n.addClass("msg_active")}t.preventDefault();var n=$(".msg"),a=$(this).closest(".form"),i=a.find(".input"),r=a.find(".error"),c=e();c?$.ajax({url:a.attr("action"),data:a.serialize(),type:"POST",success:function(t){o(t)},error:function(){o("Ошибка отправки. Пожалуйста, повторите попытку.")},complete:function(){setTimeout(function(){n.removeClass("msg_active")},3e3),a[0].reset()}}):(r.css("opacity","1"),setTimeout(function(){r.css("opacity","0")},5e3))})});