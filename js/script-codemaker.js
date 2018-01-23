/*funÃ§Ã£o animate ao clicar na ancora do site */
function ancoraAnimate() {

    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset - 40
        }, 800);
    });
}

ancoraAnimate();

/****efeito no nav********/

function navBarDinamico(){

    var navegacao = $(".navbar");
    
    $(window).scroll(function() {
    if( $(this).scrollTop() > 400 ) {
        $(".img-logo").attr("src","img/logo-codemaker.png");
        navegacao.addClass("fixed-top");
        navegacao.removeClass("bg-custom");
        navegacao.addClass("bg-custom-fixed");
    
    }

    else {
        $(".img-logo").attr("src","img/logo-icone-white.png");
        navegacao.removeClass("fixed-top");
        navegacao.removeClass("bg-custom-fixed");
        navegacao.addClass("bg-custom");
       
    }
    });
}

navBarDinamico();

/********Area de Carousel do portfolio *********/
function areaCarousel() {

    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        items: 3,
        margin: 31,
        stagePadding: 30,
        smartSpeed: 650,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            },
            1024: {
                items: 2
            },
            1600: {
                items: 1
            }
        }
    })
}

areaCarousel();

function enviaEmail(){

    var nome = $("#nome").val();
    var telefone = $("#tel").val();
    var email = $("#email").val();
    var msg = $("#mensagem").val();

    var retorno = $("#msg-retorno").html('Mensagem enviada! Se preferir entre em contato também através do nosso e-mail contato@codemakerweb.com.br');

    if(nome == "" || nome.length <= 3){
        $("#nome-erro").html("campo inválido, insira ao menos 5 caracteres.");
        return;
        
    }

    if(email == "" || email.length <= 7){
        $("#mail-erro").html("email inválido, verifique novamente.");
        return;   
    }

    if(telefone == "" || telefone.length <=7){
        $("#tel-erro").html("número inválido, insira um número de pelo menos 8 digitos.");
        return;     
    }

    if(msg == "" || msg.length <=7){
        $("#msg-erro").html("Mensagem muito curta.");
        return; 
    }   
}


 // else{

    //     $.ajax({
    //         type: "POST",
    //         url: "sendmail.php", /* endereço do script PHP */
    //         async: true,
    //         data: urlData, /* informa Url */
    //         success: function(data) { /* sucesso */
    //             alert(retorno);
    //         },
    //         beforeSend: function() { /* antes de enviar */
    //             $('.loading').fadeIn('fast'); 
    //         },
    //         complete: function(){ /* completo */
    //             $('.loading').fadeOut('fast'); //wow!
    //         }
    //     });
    // }